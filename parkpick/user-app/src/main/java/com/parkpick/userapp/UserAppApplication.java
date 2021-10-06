package com.ParkPick.userapp;

import jdk.swing.interop.SwingInterOpUtils;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.beans.factory.annotation.Autowired;
import org.w3c.dom.ls.LSOutput;

import java.sql.SQLOutput;

@SpringBootApplication
public class UserAppApplication implements CommandLineRunner {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	public static void main(String[] args) {

		SpringApplication.run(UserAppApplication.class, args);

	}

	@Override
	public void run(String... args) throws Exception {

	}
}
