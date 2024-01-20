import { User } from "./user.js";
import { Application } from "./application.js";
export async function GetClubs() {
    try {
        const url = 'https://localhost:7102/api/Clubs';
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        };

        const response = await fetch(url, requestOptions);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const clubsData = await response.json();
        console.log(clubsData); // Logging fetched data
        return clubsData; // Returning the fetched data
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
}


export async function GetUsers() {
    try {
        const url = 'https://localhost:7102/api/Users';
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        };

        const response = await fetch(url, requestOptions);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const userData = await response.json();
        console.log(userData); // Logging fetched data
        return userData; // Returning the fetched data
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
}
export async function RegisterUser(data) {
    try {
        console.log("Uslo");
        const url = 'https://localhost:7102/api/Users'; // Replace with your actual registration API endpoint
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(data), // Convert data to JSON string
        };

        const response = await fetch(url, requestOptions);

        if (!response.ok) {
            throw new Error('Registration failed');
        }

        const responseData = await response.json(); // Assuming the server returns JSON data upon successful registration
        console.log('Registration successful:', responseData);

        return responseData; // Returning the response data
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
}
