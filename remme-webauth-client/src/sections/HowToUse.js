import React, { Fragment } from "react";
import { Card } from 'antd';
import { Link } from "react-router-dom";

import claim from '../images/remme-claim-tokens-button.png';
import form from '../images/remme-claim-tokens-form.png';
import notice from '../images/remme-faq-notice-file.png';
import keystore from '../images/remme-keystore-file.png';
import explorer from '../images/remme-blockchain-explorer-recent.png';
import register from '../images/remme-register-page.png';
import details from '../images/remme-registration-details.png';
import second from '../images/remme-registration-second-factor.png';
import downloaded from '../images/remme-downloaded-file.png';
import login from '../images/remme-login-select-certificate.png';
import password from '../images/remme-login-enter-password.png';
import login2 from '../images/remme-login-2.png';
import success from '../images/remme-login-success.png';
import revoke from '../images/remme-revoke-button.png';

const NotFound = props => (
  <Fragment>
    <div className="section">
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px"  }}>
        <h1 className="tac">Welcome!</h1>
        <p>One of the most prominent needs of any organisation and platform is to authenticate and authorize its members.</p>
        <p>In order to help with affairs, REMME has built web auth demo of how a secure login systems works and how to implement it.</p>
        <p>We’ve developed a login mechanism with REMchain storage in mind to check against user certificate’s hash and its validity.</p>
        <p>Addiotionally, We added support to a 2nd factor option such as Google Authenticator in case of a certificate being stolen by the third party.</p>
        <br/>
        <h1>How to use Web Auth Demo:</h1>
        <h2>1. Generate a keystore file</h2>
        <ol>
          <li>Before proceeding to demo, one needs to generate a keystore file, which is used whenever user sends a transaction to REMchain and has the following form:</li>
        </ol>

        <Card className="code-block">
          <p>&#123;</p>
          <p>&#160;&#160;&quot;publicKey&quot;:&quot;0205af8af2b75bbab7197bee761329ea9294c65e2d127c66344d5c629b3f8aa72a&quot;,</p>
          <p>&#160;&#160;&quot;privateKey&quot;:&quot;67cc68c0eb28224def574bb646a621cb1fdc0665260ecc63c3d5090a425a3a97&quot;</p>
          <p>&#125;</p>
        </Card>

        <p>It can be generated in the form by clicking <em>Claim Tokens</em> button in <a href="https://blockexplorer.remme.io/" target="_blank" rel="noopener noreferrer">Blockchain explorer</a> at the top right corner.</p>
        <img src={claim} alt="claim" style={{ maxWidth: 370, margin: "0 auto", display: "block"  }}/>
        <p>Then one needs to generate a <cite>keystore.txt</cite> file and enter public key information from its contents:</p>
        <img src={form} alt="form" style={{ maxWidth: 550, margin: "0 auto", display: "block"  }}/>
        <img src={notice} alt="notice" style={{ maxWidth: 550, margin: "0 auto", display: "block"  }}/>
        <img src={keystore} alt="keystore" style={{ maxWidth: 550, margin: "0 auto", display: "block"  }}/>
        <ol start="2">
          <li>Afterwards, in order to create a certificate, one has to get some tokens on their balance. Thus by providing a Discord nickname in the very same form and pressing “Submit”, the public key provided will receive tokens to its address.</li>
        </ol>
        <img src={explorer} alt="explorer" style={{ maxWidth: 550, margin: "0 auto", display: "block"  }}/>
        <br/>
        <h2>2. Generate and register a certificate</h2>
        <ol>
          <li>Go to <Link to="/register">Register Page</Link> where you will be asked to provide a REMchain keystore file you have just received.</li>
        </ol>
        <img src={register} alt="register" style={{ maxWidth: 550, margin: "0 auto", display: "block"  }}/>
        <ol start="2">
          <li>Provide certificate details. Some general information about the owner as well as certificate password for local keychain for MacOS storage is required (other OS’s is optional). Then press “Create User” and the transaction on the blockchain will be sent for you.</li>
        </ol>
        <img src={details} alt="details" style={{ maxWidth: 550, margin: "0 auto", display: "block"  }}/>
        <ol start="3">
          <li>You may see the transaction appeared on the blockchain. At this point you will be asked weather you would like to add additional measure of security such as a second factor authentication.</li>
        </ol>
        <img src={second} alt="second" style={{ maxWidth: 550, margin: "0 auto", display: "block"  }}/>
        <ol start="4">
          <li>Success. A new certificate was registered on the REMchain.</li>
        </ol>
        <br/>
        <h2>3. Save the certificate to local keystore</h2>
        <p>If everything went well, the certificate with a <cite>.p12</cite> extension was downloaded.</p>
        <img src={downloaded} alt="downloaded" style={{ maxWidth: 550, margin: "0 auto", display: "block"  }}/>
        <p>To save it to your local keystore, it is enough to open the file and follow instructions. You will be asked to enter the password you mentioned during the registration step above.</p>
        <br/>
        <h2>4. Login using certificate</h2>
        <ol>
          <li>Once a certificate is generated and stored on a user’s local storage, one may log into the system by visiting <Link to="/login">Login Page</Link></li>
          <li>By clicking on a “login” button, a user will be prompted to choose a certificate for authentication purposes.</li>
        </ol>
        <img src={login} alt="login" style={{ maxWidth: 550, margin: "0 auto", display: "block"  }}/>
        <img src={password} alt="password" style={{ maxWidth: 550, margin: "0 auto", display: "block"  }}/>
        <ol start="3">
          <li>The next step will prompt to perform the 2nd factor, if one has check-marked during the registration step. Press “Login” to skip the step or enter the secret code.</li>
        </ol>
        <img src={login2} alt="login2" style={{ maxWidth: 250, margin: "0 auto", display: "block"  }}/>
        <ol start="4">
          <li>Success. You are now logged in using your certificate! You will be directed to a classified resource.</li>
        </ol>
        <img src={success} alt="success" style={{ maxWidth: 700, margin: "0 auto", display: "block"  }}/>
        <br/>
        <h2>Revoke certificate (Optional)</h2>
        <p>At one point, the certificate may loose its actuallity die to organisation member leaving the company or the certificate gets compromised.</p>
        <ol>
          <li>At the right upper corner, by clicking a dropdown arrow, one will find a “Revoke” button, which allows to revoke current certificate one has logged in with.</li>
        </ol>
        <img src={revoke} alt="revoke" style={{ maxWidth: 300, margin: "0 auto", display: "block"  }}/>
        <ol start="2">
          <li>Once you expired the certificate, it is recommended to remove it locally: for MacOS user from the key chain (Chrome: Settings =&gt; Search for “Manage Certificates”) and if Firefox browser is used - one has to remove it from preferences.</li>
        </ol>
        <br/>
      </div>
    </div>
  </Fragment>
);

export default NotFound;
