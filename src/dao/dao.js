let token = null;

export async function getBlogs() {
    try {
        const response = await fetch('/blogs');
        const blogs = await response.json();
        return blogs;
    } catch(error) {
        console.error(error);
    }
}

export async function getBlog(id) {
    try {
        const response = await fetch(`/blogs/${id}`);
        const blog = await response.json();
        return blog;
    } catch(error) {
        console.log("Its an Error");
        return false;
    }
}

export async function getUser(id) {
    try {
        const response = await fetch(`/user/${id}`);
        const user = await response.json();
        return user;
    } catch(error) {
        console.log(error);
    }
}

export async function signUp(user) {
    try {
        await fetch("/auth/signup", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        });
    } catch(error) {
        console.log(error);
    }
}

export async function signIn(userCredentials) {
    try {
        const response = await fetch("/auth/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userCredentials),
        });

        token = response.json().token;
        console.log(token);

    } catch(error) {
        console.error(error);
    }
}

export async function getMe(){
    try {
        const response = await fetch("/auth/me", {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZmlyc3RfbmFtZSI6IlNoaXZhbSIsImxhc3RfbmFtZSI6Ikt1bWFyIiwiZW1haWwiOiJza0AxMjMiLCJpYXQiOjE2MDYzNzM0NzAsImV4cCI6MTYwNjQ1OTg3MH0.JyRX_66xEaA0p-Yh9RT0wdGG_arfS6Ve-4AMzTiqVZY"
            }
        });
        const user = await response.json();
        console.log(user);
    } catch(error) {
        console.error(error);
    }
}