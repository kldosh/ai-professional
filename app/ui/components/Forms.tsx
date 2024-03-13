interface InputProps {
  label: string;
  type: string;
  id: string;
}

interface AreaProps {
  label: string;
  id: string;
}

function FormInput({ label, type, id }: InputProps) {
  return (
    <div>
      <label
        htmlFor={`${id}`}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>

      <input
        type={`${type}`}
        id={`${id}`}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        required
      ></input>
    </div>
  );
}

function FormArea({ label, id }: AreaProps) {
  return (
    <div className="mb-6">
      <label
        htmlFor={`${id}`}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <textarea
        id={`${id}`}
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      ></textarea>
    </div>
  );
}

function FormButton() {
  return (
    <div className="flex justify-center">
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Contact Us
      </button>
    </div>
  );
}

export default function ContactForm() {
  return (
    <div className="bg-amber-50 h-auto max-w-screen-md mx-auto p-10 rounded-2xl shadow-[0px_0px_10px_2px] shadow-ai-blue">
      <form action="">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <FormInput label="First name" type="text" id="first_name"></FormInput>
          <FormInput label="Last name" type="text" id="last_name"></FormInput>
          <FormInput label="Email" type="email" id="email"></FormInput>
          <FormInput label="Phone" type="tel" id="phone"></FormInput>
        </div>
        <FormArea label="Message" id="message"></FormArea>
        <FormButton></FormButton>
      </form>
    </div>
  );
}
