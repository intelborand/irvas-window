import checkNumInputs from './checkNumInputs';

const forms = (state) => {
    const form = document.querySelectorAll('form'),
          input = document.querySelectorAll('input');


    checkNumInputs('input[name="user_phone"]');


    const message = {
        loading: 'Loading...',
        success: 'Thanks!',
        error: 'Smth goes wrong!'
    }

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMaessage = document.createElement('div');
            statusMaessage.classList.add('status');
            item.appendChild(statusMaessage);

            const formData = new FormData(item);
            if (item.getAttribute('data-calc') === "end") {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMaessage.textContent = message.success;
                })
                .catch(() => {
                    statusMaessage.textContent = message.error;
                })
                .finally(() => {
                    input.forEach(item => {
                        item.value = '';
                    });
                    setTimeout(() => {
                        statusMaessage.remove();
                    }, 5000);
                });
        });
    });

};

export default forms;