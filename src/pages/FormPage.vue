<template>
  <div class="about">
    <div class="forma__container">
        <div class="forma__inner">
            <div class="forma__field">
                <form class="forma__area" action="//httpbin.org/post" method="post">
                    <span class="forma__name">Форма</span>

                    <fieldset>
                        <legend>Личная информация</legend>
                        <label for="name" class="forma__type">Введите имя</label>
                            <div class="forma__place">
                                <input id="name" class="forma__input" type="text" placeholder="Введите имя" name="username">
                            </div>
                        <label for="email" class="forma__type">Введите почту</label >
                        <div class="forma__place">
                            <input name="email" required id="email" type="email" placeholder="yandex@gmail.com" class="forma__input">
                        </div>

                        <label for="tel" class="forma__type">Введите номер телефона</label>
                        <div class="forma__place">
                            <input id="tel" type="tel" placeholder="+7 (988) 888-88-88" class="forma__input" name="tel">
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Контактные данные</legend>
                        <label for="date" class="forma__type">Выберите дату</label>
                        <div class="forma__place">
                            <input id="date" type="date" value="2021-11-22" min="2016-01-01" max="2023-04-12" class="forma__input" name="date">
                        </div>

                        <label for="gender" class="forma__type">Выберите пол</label >
                        <div class="forma__place">
                            <select id="gender" class="forma__input" name="gender">
                                <option selected="selected">.....</option>
                                <option value="man">Мужчина</option>
                                <option value="woman">Женщина</option>
                            </select>
                        </div>

                        <label for="time cycle" class="forma__type">Выберите удобное время</label>
                        <div class="forma__place">
                            <select id="time" class="forma__input" name="time cycle">
                                <option selected="selected">.....</option>
                                <option value="morning">Утро</option>
                                <option value="daytime">День</option>
                                <option value="evening">Вечер</option>
                                <option value="midnight">Ночь</option>
                            </select>
                        </div>
                    </fieldset>

                        <div class="forma__buttons">
                            <button class="forma__button" type="submit">
                                Submit
                            </button>
                            <button class="forma__button" type="reset">
                                Reset
                            </button>
                        </div>

                </form>
            </div>

        </div>
    </div>
  </div>
</template>


<style>
.forma__container {
    width: 100%;
    margin: 0 auto;
}

.forma__inner {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

}

.forma__field {
    width: 600px;
    text-align: center;
    border-radius: 10px;
}

.forma__area {
    width: 100%;
}

.forma__name {
    font-size: 20px;
    display: block;
    margin-top: 15px;
    margin-bottom: 25px;

}

.forma__type {
    font-size: 15px;
}

.forma__place {
    width: 100%;
}

.forma__input {
    width: 50%;
    height: 45px;
    padding: 0 25px 0 25px;
    border-radius: 5px;
    border-color: var(--buttons__color);
    margin-bottom: 15px;
}

.forma__buttons {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 250px;
}

.forma__button {
    font-size: 16px;
    align-items: center;
    padding: 5px 10px;
    min-width: 100px;
    height: 55px;
    background-color: #fff;
    margin-bottom: 15px;
}

legend {
    border: #000;
    padding: 3px 6px;
    margin-bottom: 15px;
}

fieldset {
    border: none;
    margin-bottom: 20px;
}
</style>