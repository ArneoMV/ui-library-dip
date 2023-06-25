import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

import Button from '../system/Button';
import Input from '../system/Input';

export const Form = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [placeholders, setPlaceholders] = useState({
    username: '',
    email: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const data = await response.json();
      setPlaceholders({
        username: 'Batman',
        email: data.email,
      });
    };

    fetchUserData();
  }, []);

  const onSubmit = (data) => {
    console.log('Username:', data.username);
    console.log('Email:', data.email);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h3>Login</h3>
        <div className="column form-control">
          <label htmlFor="username">Username</label>
          <Input
            label="Username"
            placeholder={placeholders.username}
            register={register('username', {
                required: {
                value: true,
                message: 'Username is required',
                },
            })}
            hasError={errors.username && errors.username.message}
            />
        </div>
        <div className="column form-control">
            <label htmlFor="email">Email</label>
            <Input
                label="Email"
                type="email"
                placeholder={placeholders.email}
                register={register('email', {
                required: {
                    value: true,
                    message: 'Email is required',
                },
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email format',
                },
                validate: {
                    notBlackListed: (fieldValue) => {
                        return (
                            !fieldValue.endsWith('baddomain.com') ||
                            'This domain is not supported!'
                        );
                        },
                },})}
                hasError={errors.email && errors.email.message}
            />
        </div>

        <div className="row">
          <Button type="primary">Send</Button>
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default Form;
