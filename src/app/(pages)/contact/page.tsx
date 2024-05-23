import ContactForm from '@/components/Form';

const Contact: React.FC = () => {
  return (
    <div className='min-h-screen container mx-auto my-auto mt-10 max-w-screen-md'>
      <h1 className='mb-3 font-bold text-gray-700 text-5xl'>Let's talk.</h1>
      <p className='text-lg mb-12'>
        I'm always interested in working on new things. Here's how you can reach
        me.
      </p>
      <ContactForm />
    </div>
  );
};

export default Contact;
