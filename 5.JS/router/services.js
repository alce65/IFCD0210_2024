import TASKS from './data/tasks.json' with {type: 'json'};

function getData(url) {
    return fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status + ' ' + response.statusText);
            }
        })
}

function setData(url, item) {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status + ' ' + response.statusText);
            }
        })
}


function updateData(url, item) {
    return fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(item),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status + ' ' + response.statusText);
            }
        })
}

function deleteData(url) {
    return fetch(url, {
        method: 'DELETE'
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status + ' ' + response.statusText);
            }
        })
}





const baseUrl = 'http://localhost:3000/tasks'
export async function getTasks() {
    return getData(baseUrl)
}

export async function setTask(task) {
    return setData(baseUrl, task)
}

export async function updateTask(id, task) {
    const url = `${baseUrl}/${id}` 
    return updateData(url, task)
}

export async function deleteTask(id) {
    const url = `${baseUrl}/${id}` 
    return deleteData(url)
}