import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setSelectedRoute } from '../../redux/route/routeSlice';
import { CommonContainer } from '../../components/GlobalStyles/CommonContainer.styled';
import { Container } from './PrivaciPolicy.styled/';
import { Text, Title } from './PrivaciPolicy.styled';

const PrivacyPolicyPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSelectedRoute(location.pathname));
  }, [dispatch, location.pathname]);

  return (
    <Container>
      <CommonContainer>
        <div>
          <Title>Privacy Policy</Title>
          <Text>
            Your privacy is important to us. This section outlines how we
            collect, use, process, and protect your personal data. This Privacy
            Policy applies to the use of our website, applications, and
            services, so please take a moment to read it.
          </Text>
          <br />
          <Text>
            What personal data do we collect: We may collect various types of
            personal data that you voluntarily provide when interacting with our
            website, registering an account or filling out forms. This may
            include your name, email address, phone number and more.
          </Text>
          <br />
          <Text>
            How we use your personal data: We use the collected personal data to
            provide services, manage your account, provide you with information
            about our products and services, and to communicate with you
            regarding inquiries and updates.
          </Text>
          <br />
          <Text>
            Protection of personal data: We take every effort to protect your
            information and use modern technologies to prevent unauthorized
            access, loss, or disclosure of your personal information.
          </Text>
          <br />
          <Text>
            Disclosure to third parties: We do not disclose your personal data
            to third parties without your consent, except when required by law
            or to provide the services you requested.
          </Text>
          <br />
          <Text>
            Changes to the Privacy Policy: We may periodically update this
            Privacy Policy. Please refer to this page to stay informed about any
            changes.
          </Text>
          <br />
          <Text>
            Contact us: If you have any questions or concerns regarding this
            Privacy Policy or your information, please contact us using the
            contact details provided on our website.
          </Text>
        </div>
      </CommonContainer>
    </Container>
  );
};

export default PrivacyPolicyPage;
