import { ChangeEvent, useRef, useContext, useEffect, useState } from 'react';
import { COUNTRIES } from '../../../Data/cities_of_the_world';
import { PersonalInformation } from '../../../types';
import { FormDataContext } from '../../../contexts/contexts';

function PersonalInformationSection() {
  // COMPONENT STATE ===========================================================
  const { data, updateFormData } = useContext(FormDataContext);
  const [localPersonalInformation, updateLocalPersonalInformation] =
    useState<PersonalInformation>(data.personalInformation);
  const timeout = useRef<number>();
  // ===========================================================================

  // UPDATE CONTEXT STATE ======================================================
  useEffect(() => {
    updateFormData({ personalInformation: localPersonalInformation });
  }, [localPersonalInformation]);
  // ===========================================================================

  // FUNCTIONS +++==============================================================
  const onNameInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(`[i] NAME => SETTING TIME OUT`);
    e.preventDefault();
    const value = e.currentTarget.value;

    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      updateLocalPersonalInformation((prevState) => {
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
      updateLocalPersonalInformation((prevState) => {
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
      updateLocalPersonalInformation((prevState) => {
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
      updateLocalPersonalInformation((prevState) => {
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
      updateLocalPersonalInformation((prevState) => {
        const newState = { ...prevState };
        newState.email = value;
        return newState;
      });
    }, 250);
  };

  const onLinkedinLinkInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.currentTarget.value;

    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      updateLocalPersonalInformation((prevState) => {
        const newState = { ...prevState };
        newState.linkedInLink = value;
        return newState;
      });
    }, 250);
  };

  const onGithubLinkInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.currentTarget.value;

    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      updateLocalPersonalInformation((prevState) => {
        const newState = { ...prevState };
        newState.githubLink = value;
        return newState;
      });
    }, 250);
  };

  // ===========================================================================

  return (
    <fieldset className={'w-full h-fit p-[1rem] flex flex-col gap-[0.5rem]'}>
      <legend>Personal Information</legend>

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
          localPersonalInformation.address.country as keyof typeof COUNTRIES
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

      <div className={'w-full h-fit'}>
        <label htmlFor='input_user_name'>Full Name:</label>
        <br />
        <input
          className={'w-full h-fit'}
          onChange={onNameInputChange}
          required={true}
          type='text'
          name='user_name'
          id='input_user_name'
          defaultValue={localPersonalInformation.userName}
        />
      </div>

      <div className={'w-full h-fit'}>
        <label htmlFor='input_country'>Country:</label>
        <br />
        <input
          className={'w-full h-fit'}
          onChange={onCountryInputChange}
          required={true}
          type='text'
          name='country'
          id='input_country'
          list={'countries-list'}
          defaultValue={localPersonalInformation.address.country}
        />
      </div>

      <div className={'w-full h-fit'}>
        <label htmlFor='City'>City:</label>
        <br />
        <input
          className={'w-full h-fit'}
          onChange={onCityInputChange}
          required={true}
          type='text'
          name='city'
          id='input_city'
          list={'cities-list'}
          defaultValue={localPersonalInformation.address.city}
        />
      </div>

      <div className={'w-full h-fit'}>
        <label htmlFor='input_telephone'>Telephone Number:</label>
        <br />
        <input
          className={'w-full h-fit'}
          onChange={onTelephoneNumberInputChange}
          required={true}
          type='tel'
          name='telephone'
          id='input_telephone'
          defaultValue={localPersonalInformation.mobile}
        />
      </div>

      <div className={'w-full h-fit'}>
        <label htmlFor='input_email'>Email:</label>
        <br />
        <input
          className={'w-full h-fit'}
          onChange={onEmailInputChange}
          required={true}
          type='email'
          name='email'
          id='input_email'
          defaultValue={localPersonalInformation.email}
        />
      </div>

      <div className={'w-full h-fit'}>
        <label htmlFor='input_linkedin_link'>LinkedIn:</label>
        <br />
        <input
          className={'w-full h-fit'}
          onChange={onLinkedinLinkInputChange}
          required={true}
          type='linkedin_link'
          name='linkedin_link'
          id='input_linkedin_link'
          defaultValue={localPersonalInformation.linkedInLink}
        />
      </div>

      <div className={'w-full h-fit'}>
        <label htmlFor='input_github_link'>Github:</label>
        <br />
        <input
          className={'w-full h-fit'}
          onChange={onGithubLinkInputChange}
          required={true}
          type='github_link'
          name='github_link'
          id='input_github_link'
          defaultValue={localPersonalInformation.githubLink}
        />
      </div>
    </fieldset>
  );
}

export default PersonalInformationSection;
