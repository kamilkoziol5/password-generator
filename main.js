const generateBtn = document.querySelector('.generate-btn');
const passwordInput = document.querySelector('.display-password input');
const copyBtn = document.querySelector('.copy-btn');
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
const allChars = upperCase + lowerCase + numbers + symbols;

function generatePassword() {
	let password = '';
	const length = 12; // możesz zmienić na dowolną długość

	for (let i = 0; i < 12; i++) {
		const randomIndex = Math.floor(Math.random() * allChars.length);
		password += allChars[randomIndex];
	}

	passwordInput.value = password;
}

function copyPassword() {
	passwordInput.select();
	navigator.clipboard.writeText(passwordBox.value);
}

generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyPassword);
