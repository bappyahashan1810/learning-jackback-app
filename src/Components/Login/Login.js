import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Context/AuthProvider';
import { Toaster, toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router';

const Login = () => {
    const { handleGoogleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    const hanlderGoogle = () => {
        handleGoogleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('successfull logIn')
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error));
    }

    return (
        <div className='App'>
            <div className='mt-10 border shadow-xl max-w-[1240px] mx-auto w-[50%]'>
                <form onSubmit={handleSubmit}>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </form>
                <label className="label p-6">
                    <button onClick={hanlderGoogle} className='btn btn-primary w-[63%] flex items-center'><FcGoogle className='text-xl'></FcGoogle>Google</button>
                    <Toaster
                        position="bottom-center"
                        reverseOrder={false}
                    />
                </label>
            </div>
        </div>
    );
};

export default Login;