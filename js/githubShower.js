const username = 'YamilMS';

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

fetchUserData(username);