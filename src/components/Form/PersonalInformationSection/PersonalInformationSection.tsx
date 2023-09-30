import { ChangeEvent, useRef, useContext, useEffect, useState } from 'react';
import { COUNTRIES } from '../../../Data/cities_of_the_world';
import { PersonalInformation } from '../../../types';
import { FormDataContext } from '../../../contexts/contexts';

function PersonalInformationSection() {
  const { updateFormData } = useContext(FormDataContext);

  const [personalInformation, updatePersonalInformation] =
    useState<PersonalInformation>({
      userName: '',
      mobile: '',
      email: '',
      address: {
        city: '',
        country: '',
      },
      githubLink: '',
      linkedInLink: '',
    });

  const timeout = useRef<number>();

  useEffect(() => {
    updateFormData({ personalInformation: personalInformation });
  }, [personalInformation]);

  const onNameInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(`[i] NAME => SETTING TIME OUT`);
    e.preventDefault();
    const value = e.currentTarget.value;

    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      updatePersonalInformation((prevState) => {
        const newState = { ...prevState, userName: value };
        return newState;
      });
    }, 250);
  };

  const onCityInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.currentTarget.value;

    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      updatePersonalInformation((prevState) => {
        const newState = { ...prevState };
        newState.address.city = value;
        return newState;
      });
    }, 250);
  };

  const onCountryInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.currentTarget.value;

    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      updatePersonalInformation((prevState) => {
        const newState = { ...prevState };
        newState.address.country = value;
        return newState;
      });
    }, 250);
  };

  const onTelephoneNumberInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.currentTarget.value;

    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      updatePersonalInformation((prevState) => {
        const newState = { ...prevState };
        newState.mobile = value;
        return newState;
      });
    }, 250);
  };

  const onEmailInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    e.preventDefault();
    const value = e.currentTarget.value;

    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      updatePersonalInformation((prevState) => {
        const newState = { ...prevState };
        newState.email = value;
        return newState;
      });
    }, 250);
  };

  return (
    <fieldset
      className={
        'w-full h-fit px-[1rem] py-[01rem] flex flex-col items-stretch justify-start gap-[1rem] border-[1px] rounded-[0.25rem] '
      }>
      <legend className={'text-left'}>Personal Information</legend>

      <datalist id={'countries-list'}>
        {Object.entries(COUNTRIES).map(([country], i) => {
          return (
            <option
              key={`country_${i}`}
              value={country}>
              {country.toUpperCase()}
            </option>
          );
        })}
      </datalist>

      <datalist id='cities-list'>
        {COUNTRIES[
          personalInformation.address.country as keyof typeof COUNTRIES
        ]?.map((city, i) => {
          return (
            <option
              key={`city_${i}`}
              value={city}>
              {city.toUpperCase()}
            </option>
          );
        })}
      </datalist>

      <div className={'text-left'}>
        <label htmlFor='input_user_name'>Full Name:</label>
        <br />
        <input
          onChange={onNameInputChange}
          required={true}
          type='text'
          name='user_name'
          id='input_user_name'
          className={'w-full'}
        />
      </div>

      <div className={'text-left'}>
        <label htmlFor='input_country'>Country:</label>
        <br />
        <input
          onChange={onCountryInputChange}
          required={true}
          type='text'
          name='country'
          id='input_country'
          className={'w-full'}
          list={'countries-list'}
        />
      </div>
      <div className={'text-left'}>
        <label htmlFor='City'>City:</label>
        <br />
        <input
          onChange={onCityInputChange}
          required={true}
          type='text'
          name='city'
          id='input_city'
          className={'w-full'}
          list={'cities-list'}
        />
      </div>
      <div className={'text-left'}>
        <label htmlFor='input_telephone'>Telephone Number:</label>
        <br />
        <input
          onChange={onTelephoneNumberInputChange}
          required={true}
          type='tel'
          name='telephone'
          id='input_telephone'
          className={'w-full'}
        />
      </div>
      <div className={'text-left'}>
        <label htmlFor='input_email'>Email:</label>
        <br />
        <input
          onChange={onEmailInputChange}
          required={true}
          type='email'
          name='email'
          id='input_email'
          className={'w-full'}
        />
      </div>
    </fieldset>
  );
}

export default PersonalInformationSection;
