document.getElementById('get-form').addEventListener('submit', (event) => {
    event.preventDefault();
    let usernameInput = document.getElementById('get-usename');
    let username = usernameInput.value;
    fetchUserData(username);
    usernameInput.value = '';

})

const fetchUserData = async (username) => {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        if (data.message === 'Not Found') {
            throw new Error('User not found');
        }

        console.log(data);
    } catch (error) {
        console.error(`There was a problem with the fetch operation: ${error.message}`);
    }
};