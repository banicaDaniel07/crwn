import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IdyQZDO4A3xNaklRUS2J3irSaZIunHEYmGRddzufjvkUitrTmHEV2EuaeV0UZHTARMzUn3yRGrX74xwTBD3NEyk00NUCeDsTG';
 
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name='CRWN Clothing'
            billingAddress
            shippingAddress
            image='https://i.pinimg.com/736x/f0/14/d9/f014d986cf1bf2033fb00908c93fd607.jpg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )


}

export default StripeCheckoutButton;