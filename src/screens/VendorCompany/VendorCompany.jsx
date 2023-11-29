import React, { useState, useEffect } from 'react';

import axios from "axios";
import { ConfigProvider, Layout, Form, Input, Button, Space, Checkbox, Divider, message, Dropdown } from 'antd';
import { DeleteOutlined, EditOutlined, SmileOutlined, DownOutlined } from "@ant-design/icons";

import { LoginGroup } from "../../components/LoginGroup";
import { Menu } from "../../components/Menu";
import { Login2 } from "../../icons/Login2";
import { CategoryDropDown } from "../../components/CategoryDropDown";

import { getJwtToken, saveJwtToken, removeJwtToken, returnToMainpage } from '../../helper/jwt.helper';

import { Route, Switch, useLocation } from 'react-router-dom'

import "./style.css";

export const VendorCompany = () => {
  
  useEffect(()  => { document.body.classList.remove('login-style'); });

  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, [pathname, hash, key]); // do this on route change

  const [messageApi, contextHolder] = message.useMessage();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const signOut = () => {
    // console.log("signOut click");
    removeJwtToken();
  
    setTimeout(() => {
      messageApi.open({
        type: 'success',
        content: 'Log out successful!',
        duration: 2,
      });
    }, 500);
    setTimeout(function() { window.location = "/"; }, 1000);
    
  }
  
  const items = [
    {
      key: '1',
      label: "Sign out",
      onClick: () => { signOut(); },
    }
  ];

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    // console.log(newData);
    setData(newData);
  }

  function submit() {

    messageApi.open({
      type: 'logging in',
      content: 'logging in...',
      duration: 0.5
    });

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/v1/auth/user/signin`, {
        email: data.email,
        password: data.password,
      })
      .then((result) => {
        console.log(result);
        if(result.data.role == 1){
          setTimeout(() => {
            messageApi.open({
              type: 'success',
              content: 'Log in successful!',
              duration: 2,
            });
          }, 500);
          setTimeout(function() { window.location = "/vendor-account"; }, 1000);
        }
        else{
          setTimeout(() => {
            messageApi.open({
              type: 'error',
              content: 'Please login with a customer account!',
              duration: 2,
            });
          }, 500);
        }
        
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setTimeout(() => {
          messageApi.open({
            type: 'error',
            content: err.response.data.message,
            duration: 2,
          });
        }, 500);
      });
  }

  const [form] = Form.useForm();

  const customAntdStyle = { 
    token: 
    { 
      fontFamily: "Poppins, Helvetica",
      fontSize: "14px",
      fontWeight: "500"
    } 
  }

  return (
    <ConfigProvider theme={customAntdStyle}>
      {contextHolder}
      { getJwtToken() ?
      <div className="vendor-company">
        <div className="div">
          <div className="overlap">
            <img className="bg-img" alt="Bg img" src="/img/bgimg.png" />
            <a href='/'><img className="white-logo" alt="White logo" src="/img/whitelogo.png" /></a>
            
            <div className="navbar">
              <div className="text-wrapper-2"><a className="menu-link" href='/'>Home</a></div>
              <div className="text-wrapper-2"><a className="menu-link" href='/vendor-booking'>Booking</a></div>
              <div className="text-wrapper-2"><a className="menu-link higlight" href='/vendor-company'>Company</a></div>
              <div className="text-wrapper-3"><a className="menu-link" href='/vendor-account'>My Profile</a></div>
              <div className="text-wrapper-2"><a className="menu-link" href='/vendor-schedule'>Schedule</a></div>
              <div className="text-wrapper-2"><a className="menu-link" href='/'>Help</a></div>
            </div>

            { getJwtToken() ?
              
              <div className={`login-group myaccount-group-instance`}>
                <div className="overlap-group-wrapper">
                  <div className={`overlap-group white-login-default`}>
                    {/* <a className="login-btn" href='/user-login'>
                      <Login2 className="login-2-instance" />
                    </a> */}
                    <Login2 className="login-2-instance" />
                      <Dropdown
                        overlayClassName="my-account-dropdown"
                        menu={{
                          items,
                        }}
                      >
                        <a className="LOGIN signup" onClick={(e) => e.preventDefault()}>
                          <Space>
                            MyAccount
                            <DownOutlined />
                          </Space>
                        </a>
                      </Dropdown>
                  </div>
                </div>
              </div>
              :
              <LoginGroup
                className="login-group-instance"
                icon={<Login2 className="login-2-instance" />}
                whiteLogin="default"
                loginLink="/vendor-login"
                SignupLink="/vendor-signup"
              />
            }

            {/* <div className="login-group">
              <div className="group">
                <div className="overlap-group">
                  <div className="text-wrapper-4">SignOut</div>
                </div>
              </div>
              <div className="text-wrapper-5">Are you a customer?</div>
            </div> */}

            <div className="slogan">
              <div className="rectangle" />
              <div className="slogans">
                Discover
                <br />
                Book
                <br />
                Celebrate Your Moments
              </div>
            </div>
            {/* <div className="rectangle-2" /> */}
            <div className="rectangle-3" />
            <div className="overlap-wrapper" id="anchor">
              <div className="overlap-2">
                <a href='/vendor-company/#anchor'><div className="rectangle-4" /></a>
                <a href='/vendor-account/#anchor'><div className="rectangle-5" /></a>
                <a href='/vendor-schedule/#anchor'><div className="rectangle-6" /></a>
                <a href='/vendor-booking/#anchor'><div className="rectangle-7" /></a>
                <div className="group-2">
                  <a href='/vendor-company/#anchor'><div className="text-wrapper-6">Company Info</div></a>
                  <a href='/vendor-account/#anchor'><div className="text-wrapper-7">My Profile</div></a>
                  <a href='/vendor-schedule/#anchor'><div className="text-wrapper-8">Schedule</div></a>
                  <a href='/vendor-booking/#anchor'><div className="text-wrapper-9">Booking</div></a>
                  <img className="bi-info-circle" alt="Bi info circle" src="/img/bi-info-circle.svg" />
                </div>
              </div>
            </div>
            {/* <div className="frame">
              <div className="input">
                <input className="div-2" placeholder="Comapny Name" type="text" />
                <div className="cheveron" />
              </div>
            </div>
            <div className="input-wrapper">
              <div className="input">
                <div className="text-wrapper-10">Owner</div>
                <div className="cheveron" />
              </div>
            </div>
            <div className="div-wrapper">
              <div className="input">
                <div className="text-wrapper-10">Vendor Type</div>
                <img className="cheveron" alt="Cheveron" src="/img/cheveron.svg" />
              </div>
            </div>
            <div className="frame-2">
              <div className="input">
                <input className="div-2" placeholder="Phone Number" type="tel" />
                <div className="cheveron" />
              </div>
            </div>
            <div className="frame-3">
              <div className="input">
                <input className="div-2" placeholder="Email" type="email" />
                <div className="cheveron" />
              </div>
            </div>
            <div className="frame-4">
              <div className="input">
                <input className="div-2" placeholder="Street Address" type="text" />
                <div className="cheveron" />
              </div>
            </div>
            <div className="text-wrapper-11">Product Description</div>
            <div className="rectangle-8" />
            <p className="p">Enter your company description here...</p>
            <div className="group-3">
              <IconArrowDown1 className="icon-arrow-down" color="white" />
              <IconArrowDown2 className="icon-arrow-down-2" />
              <div className="rectangle-9" />
            </div>
            <div className="frame-wrapper">
              <div className="frame-5">
                <div className="frame-6">
                  <IconTickCircle className="icon-tick-circle" />
                  <p className="text-wrapper-12">Seems Like a good Description</p>
                </div>
                <div className="text-wrapper-13">400/500</div>
              </div>
            </div>
            <div className="text-wrapper-14">Company</div>
            <div className="text-wrapper-15">Contact</div>
            <div className="button-row">
              <Button
                buttonPrimaryIconClassName="design-component-instance-node"
                className="button-instance"
                icon={false}
                iconOnly={false}
                size="large"
                stateProp="default"
                text="Save"
                type="secondary"
              />
              <Button
                buttonPrimaryIconClassName="button-3"
                className="button-2"
                icon={false}
                iconOnly={false}
                size="large"
                stateProp="inactive"
                text="Edit"
                type="primary"
              />
            </div>
            <CloudUploadingIcon className="cloud-uploading-icon" />
            <div className="text-wrapper-16">Upload Pics</div> */}
          </div>
          <footer className="footer">
            <div className="group-wrapper">
              <div className="group-4">
                <p className="text-wrapper-17">Copyright @ Eventfull 2023. All Rights Reserved.</p>
                <div className="rectangle-10" />
                <div className="overlap-3">
                  <div className="nav-wrap">
                    <div className="nav-list-item">
                      <div className="text-wrapper-18">Company</div>
                      <div className="frame-7">
                        <div className="text-wrapper-19">About Us</div>
                        <div className="text-wrapper-20">Contact Us</div>
                        <div className="text-wrapper-20">Follow Us</div>
                      </div>
                    </div>
                    <div className="nav-list-item-2" />
                    <div className="nav-list-item-3">
                      <p className="text-wrapper-18">Sign Up For Eventfull Updates</p>
                      <div className="group-5">
                        <div className="overlap-group-wrapper">
                          <div className="overlap-group-2">
                            <div className="text-wrapper-21">Your email address</div>
                            <div className="overlap-4">
                              <div className="text-wrapper-22">Subscribe</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="will-send-you-weekly">
                        *&nbsp;&nbsp;Will send you weekly updates for promotion events.
                      </p>
                    </div>
                  </div>
                  <div className="group-6">
                    <div className="discover-book">
                      Discover
                      <br />
                      Book
                      <br />
                      Celebrate Your Moments
                    </div>
                    <img className="img" alt="Group" src="/img/group-169.png" />
                  </div>
                </div>
                <img className="original-logo" alt="Original logo" src="/img/originallogo.png" />
              </div>
            </div>
          </footer>
          <div className="group-7">
            <div className="overlap-5">
              <div className="footer-head">
                <div className="rectangle-11" />
              </div>
              <div className="text-wrapper-23">Explore Eventfull</div>
            </div>
          </div>
        </div>
      </div>
      :
      returnToMainpage()
      }
    </ConfigProvider>
  );
};
