fetch('https://oum31b70m9.execute-api.eu-central-1.amazonaws.com/prod/hello')
.then(response => response.json())
.then((data) => {
	document.getElementById('visits').innerText = data.ID
})