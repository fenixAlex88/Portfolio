const Contacts = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Minsk, Republic of Belarus</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Viber / Telegram / WhatsApp</h2>
                        <p>
                            <a href="tel:+375296458829">+375 (29) 645-88-29</a>
                        </p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Linkedin</h2>
                        <p>
                            <a href="https://www.linkedin.com/in/aleksei-pekar/">Aleksei Pekar</a>
                        </p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p>
                            <a href="mailto:pekar.alexey@gmail.com">pekar.alexey@gmail.com</a>
                        </p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Skype</h2>
                        <p>
                            <a href="https://join.skype.com/invite/FvSRAmADbn7C">alexey.fenix</a>
                        </p>
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default Contacts;
