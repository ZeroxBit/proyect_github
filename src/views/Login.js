import React, { useState } from "react";
import { saveTokenServices, singInServices } from "../services/authServices";
const Login = ({ history }) => {
    const [formValues, setFormValues] = useState({ email: "", password: "" });

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await singInServices(formValues);
        if (result) {
            saveTokenServices(result.token);
            history.replace("/");
        }
    };

    const { email, password } = formValues;

    return (
        <div className="container-login">
            <div className="column is-4">
                <form className="box" onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input
                                className="input"
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                placeholder="Ingresa tu email"
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input
                                className="input"
                                type="password"
                                name="password"
                                placeholder="Ingresa tu contraseña"
                                value={password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <button className="button is-primary">Sign in</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
