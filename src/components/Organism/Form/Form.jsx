import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

import './_form.scss';
import Button from '../../Molecules/Button/Button';
import Input from '../../Molecules/Input/Input';
import { Title, Paragraf } from '../../Atoms/Typography/Typography';


const Form = () => {

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    // from the react-hook-form docs;
    // https://react-hook-form.com/docs/useform#mode
    // "This option allows you to configure the validation strategy before a user submits the form.
    // (by default) The validation occurs during the onSubmit event, which is triggered by invoking the handleSubmit function."
    mode: 'onChange', // "Validation is triggered on the changeevent for each input, leading to multiple re-renders."
    defaultValues: {
      username: '',
      password: '',
    },
  });

  
  const onSubmit = (data) => {
    alert(`Username: ${data.username}\n${data.email}`);
    if (window.confirm('Osvježi polja za unos?')) {
      // Reset the entire form state, fields reference, and subscriptions.
      //  There are optional arguments and will allow partial form state reset.
      reset({ username: '', email: '' });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className='form-container'>
          <div className='row'>
            <Button type="icon" iconName="arrowLeftShortFill" />
          </div>
        </div>


        <div className='column form-content'>
          <Input
            label="Username"
            type="text"
            placeholder="Add username"
            register={register('username', {
              required: {
                value: true,
                message: 'Username is required',
              },
            })}
            error={
              errors.username &&
              errors.username.type === 'required' &&
              errors.username.message
            }
          />
          <Input
            label="Password"
            type="password"
            placeholder="Add password"
            register={register('username', {
              required: {
              value: true,
                message: 'Password is required',
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid password',
              },
              validate: {
                notBlackListed: (fieldValue) => {
                  return (
                    !fieldValue.endsWith('baddomain.com') ||
                    'This domain is not supported!'
                  );
                },
              },
            })}
            error={errors.password && errors.password.message}
          />
          <div className='row'>
            <Title level={4} color="neutral-700">Sign In</Title>
            <Button type="icon" iconName="chevronRight2" />
          </div>
          <div className='row'>
            <Button type="link">Sign in</Button>
            <Button type="link">Forgot password</Button>
          </div>
        </div>
      </form>
      {/* <DevTool control={control} /> */}
    </div>
  );
};

export default Form;
