package constant

func Table() {
	userTable := `CREATE TABLE IF NOT EXISTS user (
		id TEXT PRIMARY KEY,
		auth_code TEXT,
		offline_mode BOOLEAN,
	)`
}
