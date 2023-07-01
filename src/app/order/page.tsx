import OrderForm from './orderForm';

const OrderPage: React.FC = () => {
  return (
    <section className="text-center mx-4 mb-4">
      <h1 className="text-2xl md:text-5xl text-text">
        Please fill with the information to get your{' '}
        <span className="text-highlight">fresh pizza</span>
      </h1>
      <p className="text-md md:text-xl font-description text-navbarNotSelected">
        This way we can get your pizza made and delivered faster
      </p>

      <OrderForm />
    </section>
  );
};

export default OrderPage;
