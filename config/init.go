package config

import (
	"database/sql"
	"log"
	"os"
	"path/filepath"

	_ "github.com/mattn/go-sqlite3"
)

func DbCon() *sql.DB {
	userHome, _ := os.UserHomeDir()
	dbPath := filepath.Join(userHome, ".glide", "glide.db")
	os.MkdirAll(filepath.Dir(dbPath), 0700)

	db, err := sql.Open("sqlite3", dbPath)
	if err != nil {
		log.Fatal(err)
	}
	return db

}

func TableCreate(db *sql.DB) {
	
}
