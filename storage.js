// Get the saved list of registered accounts
function getUsers() {
    let users = localStorage.getItem('sereinUsers');
    return users ? JSON.parse(users) : [];
}

// Save the list of registered accounts
function saveUsers(users) {
    localStorage.setItem('sereinUsers', JSON.stringify(users));
}

// Show a message under a form (used by both register and login)
function showFormMessage(elementId, text, isError) {
    let message = document.getElementById(elementId);
    if (!message) return;
    message.innerText = text;
    message.className = isError ? 'form-message error' : 'form-message success';
}

// ===== REGISTER PAGE =====
function registerUser() {
    let userInput = document.getElementById('ruser');
    let pswInput = document.getElementById('rpsw');
    let username = userInput.value.trim();
    let password = pswInput.value.trim();

    if (username === '' || password === '') {
        showFormMessage('message', 'Please fill in both fields.', true);
        return;
    }

    let users = getUsers();
    let alreadyExists = users.some(function (u) {
        return u.username.toLowerCase() === username.toLowerCase();
    });

    if (alreadyExists) {
        showFormMessage('message', 'That username is already taken.', true);
        return;
    }

    users.push({ username: username, password: password });
    saveUsers(users);

    showFormMessage('message', 'Account created! You can log in now.', false);

    userInput.value = '';
    pswInput.value = '';
}

// ===== LOGIN PAGE =====
function loginUser() {
    let userInput = document.getElementById('Luser');
    let pswInput = document.getElementById('Lpsw');
    let username = userInput.value.trim();
    let password = pswInput.value.trim();

    if (username === '' || password === '') {
        showFormMessage('Message', 'Please fill in both fields.', true);
        return;
    }

    let users = getUsers();
    let match = users.find(function (u) {
        return u.username.toLowerCase() === username.toLowerCase() && u.password === password;
    });

    if (match) {
        localStorage.setItem('sereinLoggedInUser', match.username);
        showFormMessage('Message', 'Login successful! Redirecting...', false);
        setTimeout(function () {
            window.location.href = 'index.html';
        }, 700);
    } else {
        showFormMessage('Message', 'Invalid username or password.', true);
    }
}

// ===== LOGOUT (called from the account dropdown on any page) =====
function logoutUser() {
    localStorage.removeItem('sereinLoggedInUser');
    window.location.href = 'index.html';
}

// ===== NAVBAR AUTH STATE =====
// Swaps the "Login" button for an account icon + username when logged in.
function renderNavAuth() {
    let navArea = document.getElementById('navLoginArea');
    if (!navArea) return;

    let loggedInUser = localStorage.getItem('sereinLoggedInUser');
    if (!loggedInUser) return;

    navArea.innerHTML = '';

    let wrapper = document.createElement('div');
    wrapper.className = 'nav-item dropdown account-dropdown';

    let toggle = document.createElement('a');
    toggle.className = 'account-btn dropdown-toggle';
    toggle.href = '#';
    toggle.id = 'accountDropdown';
    toggle.setAttribute('role', 'button');
    toggle.setAttribute('data-bs-toggle', 'dropdown');
    toggle.setAttribute('aria-expanded', 'false');

    let icon = document.createElement('span');
    icon.className = 'account-icon';
    icon.innerHTML = '<i class="bi bi-person-fill"></i>';

    let name = document.createElement('span');
    name.className = 'account-name';
    name.textContent = loggedInUser;

    toggle.appendChild(icon);
    toggle.appendChild(name);

    let menu = document.createElement('ul');
    menu.className = 'dropdown-menu account-menu';
    menu.setAttribute('aria-labelledby', 'accountDropdown');

    let li = document.createElement('li');
    let logoutLink = document.createElement('a');
    logoutLink.className = 'dropdown-item';
    logoutLink.href = 'javascript:void(0)';
    logoutLink.innerHTML = '<i class="bi bi-box-arrow-right"></i> Logout';
    logoutLink.onclick = logoutUser;

    li.appendChild(logoutLink);
    menu.appendChild(li);

    wrapper.appendChild(toggle);
    wrapper.appendChild(menu);

    navArea.appendChild(wrapper);
}

document.addEventListener('DOMContentLoaded', renderNavAuth);