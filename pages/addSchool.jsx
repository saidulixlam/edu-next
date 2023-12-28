import React,{useState} from 'react';
import { useForm, Controller } from 'react-hook-form';

function MyForm() {
  const { handleSubmit, control, setValue, reset } = useForm();
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/add-school', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('School added successfully:', result.school);

        // Clear form fields using setValue
        Object.keys(data).forEach((field) => {
          setValue(field, '');
        });

        // Alternatively, you can use reset() function
        // reset();

        // Display success message
        setSuccessMessage('School added successfully');

        // Add your logic here:
        // For example, you can update the state, show a success message,
        // or navigate to another page.
      } else {
        console.error('Failed to add school');
        // Handle error
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-10 py-10 bg-gray-100">
      <div className="bg-white p-8 shadow-lg max-w-md w-full rounded-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">School Information Form</h2>
        {successMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md mb-4">
            {successMessage}
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <label className="block mb-4">
            <span className="text-gray-700">Name:</span>
            <Controller
              name="name"
              control={control}
              rules={{ required: 'Name is required' }}
              render={({ field, fieldState }) => (
                <>
                  <input {...field} className="form-input mt-1 block w-full border border-gray-300 rounded-md px-2 py-2" />
                  {fieldState.error && <p className="text-red-500 mt-1">{fieldState.error.message}</p>}
                </>
              )}
            />
          </label>

          {/* Address */}
          <label className="block mb-4">
            <span className="text-gray-700">Address:</span>
            <Controller
              name="address"
              control={control}
              rules={{ required: 'Address is required' }}
              render={({ field, fieldState }) => (
                <>
                  <input {...field} className="form-input mt-1 block w-full border border-gray-300 rounded-md px-2 py-2" />
                  {fieldState.error && <p className="text-red-500 mt-1">{fieldState.error.message}</p>}
                </>
              )}
            />
          </label>

          {/* City */}
          <label className="block mb-4">
            <span className="text-gray-700">City:</span>
            <Controller
              name="city"
              control={control}
              rules={{ required: 'City is required' }}
              render={({ field, fieldState }) => (
                <>
                  <input {...field} className="form-input mt-1 block w-full border border-gray-300 rounded-md px-2 py-2" />
                  {fieldState.error && <p className="text-red-500 mt-1">{fieldState.error.message}</p>}
                </>
              )}
            />
          </label>

          {/* State */}
          <label className="block mb-4">
            <span className="text-gray-700">State:</span>
            <Controller
              name="state"
              control={control}
              rules={{ required: 'State is required' }}
              render={({ field, fieldState }) => (
                <>
                  <input {...field} className="form-input mt-1 block w-full border border-gray-300 rounded-md px-2 py-2" />
                  {fieldState.error && <p className="text-red-500 mt-1">{fieldState.error.message}</p>}
                </>
              )}
            />
          </label>

          {/* Contact Number */}
          <label className="block mb-4">
            <span className="text-gray-700">Contact Number:</span>
            <Controller
              name="contactNumber"
              control={control}
              rules={{ required: 'Contact Number is required' }}
              render={({ field, fieldState }) => (
                <>
                  <input {...field} className="form-input mt-1 block w-full border border-gray-300 rounded-md px-2 py-2" />
                  {fieldState.error && <p className="text-red-500 mt-1">{fieldState.error.message}</p>}
                </>
              )}
            />
          </label>

          {/* Image */}
          <label className="block mb-4">
            <span className="text-gray-700">Image URL:</span>
            <Controller
              name="image"
              control={control}
              rules={{ required: 'Image URL is required' }}
              render={({ field, fieldState }) => (
                <>
                  <input {...field} type="text" className="form-input mt-1 block w-full border border-gray-300 rounded-md px-2 py-2" />
                  {fieldState.error && <p className="text-red-500 mt-1">{fieldState.error.message}</p>}
                </>
              )}
            />
          </label>

          {/* Email */}
          <label className="block mb-4">
            <span className="text-gray-700">Email:</span>
            <Controller
              name="email"
              control={control}
              rules={{
                required: 'Email ID is required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Invalid email address',
                },
              }}
              render={({ field, fieldState }) => (
                <>
                  <input {...field} className="form-input mt-1 block w-full border border-gray-300 rounded-md px-2 py-2" />
                  {fieldState.error && <p className="text-red-500 mt-1">{fieldState.error.message}</p>}
                </>
              )}
            />
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white rounded py-2 px-4 w-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Add School
          </button>
        </form>
      </div>
    </div>
  );
}

export default MyForm;
