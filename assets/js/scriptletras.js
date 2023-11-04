let currentColor = 'white';

        document.addEventListener('keydown', function (event) {
            if (event.key === 'a') {
                currentColor = 'pink';
            } else if (event.key === 's') {
                currentColor = 'orange';
            } else if (event.key === 'd') {
                currentColor = 'lightblue';
            }

            document.getElementById('key').style.backgroundColor = currentColor;
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'q') {
                createNewDiv('purple');
            } else if (event.key === 'w') {
                createNewDiv('gray');
            } else if (event.key === 'e') {
                createNewDiv('brown');
            }
        });

        function createNewDiv(newColor) {
            const newDiv = document.createElement('div');
            newDiv.className = 'square';
            newDiv.style.backgroundColor = newColor;
            document.getElementById('container').appendChild(newDiv);
        }