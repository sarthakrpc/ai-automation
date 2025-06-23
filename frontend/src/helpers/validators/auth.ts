import z from 'zod';

const emailValidator = z
	.string()
	.email({ message: 'Invalid email address' })
	.min(1, { message: 'Email is required' });

const passwordValidator = z
	.string()
	.min(8, { message: 'Password must be at least 8 characters long' })
	.max(128, { message: 'Password must be at most 128 characters long' });

export const loginValidator = z.object({ email: emailValidator, password: passwordValidator });

export const signupValidator = z
	.object({
		email: emailValidator,
		password: passwordValidator,
		confirmPassword: passwordValidator
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Passwords do not match',
		path: ['confirmPassword']
	});
