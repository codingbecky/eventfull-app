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

export const MyAccountDefault = () => {
  
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

  const [isHoverVendor, setHoverVendor] = React.useState(false);
  
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
      <div className="my-account-default">
        <div className="div-2">
          <div className="overlap">
            <img className="bg-img" alt="Bg img" src="/img/bgimg.png" />
            <a href='/'><img className="white-logo" alt="White logo" src="/img/whitelogo.png" /></a>

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

            <div className={`menu navbar`}>
              <div className={`div menu-home-home menu-instance`}><a className="menu-link" href='/'>Home</a></div>
              <div className={`div menu-home-home menu-instance`}><div className="menu-link vendor" href='/vendors' onClick={() => { setHoverVendor(!isHoverVendor); }}>Vendors</div></div>
              <div className={`text-wrapper-2 menu-home-0-home menu-instance`}><a className="menu-link" href='/about-us'>About Us</a></div>
              <div className={`text-wrapper-3 menu-home-1-home menu-instance`}><a className="menu-link" href='/princing'>Pricing</a></div>
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

            { isHoverVendor ?
              <CategoryDropDown
                categoryDropDownClassName="design-component-instance-node"
                className="category-drop-down-instance"
                spanClassName="category-drop-down-2"
              /> : <div></div>
            }

            {/* <Menu
              className="navbar"
              divClassName="menu-instance"
              divClassName1="menu-instance"
              divClassName2="menu-instance"
              divClassNameOverride="menu-instance"
              menuHome="default"
            />
            
            <div className="login-group">
              <div className="overlap-group">
                <div className="login">
                  <div className="ellipse" />
                  <img className="img" alt="Ellipse" src="/img/ellipse-8.svg" />
                </div>
                <div className="text-wrapper-4">MyAccount</div>
              </div>
            </div> */}

            <div className="group" id="anchor">
              <div className="group-2">
                <div className="overlap-group-2">
                  <div className="rectangle-2" />
                  <p className="p">You do not create any booking yet.</p>
                  <a href='/myaccount-default/#anchor'><div className="rectangle-3" /></a>
                    <a href='/myaccount/#anchor'><div className="rectangle-4" /></a>
                    <a href='/subscribe/#anchor'><div className="rectangle-5" /></a>
                    <a href='/plans/#anchor'><div className="rectangle-6" /></a>
                    <div className="group-3">
                      <a href='/myaccount-default/#anchor'><div className="text-wrapper-5">My Bookings</div></a>
                      <a href='/myaccount/#anchor'><div className="text-wrapper-6">My Profile</div></a>
                      <a href='/subscribe/#anchor'><div className="billing-subscription">Subscription</div></a>
                      <a href='/plans/#anchor'><div class="get-eventfull-pro">Get Eventfull Pro</div></a>
                    </div>
                </div>
              </div>
            </div>
            <div className="categories">
              <div className="enjoy-planning-your">
                <p className="text-wrapper-7">Start to book vendor now</p>
              </div>
              <div className="venues">
                <div className="overlap-group-3">
                  <div className="overlap-2">
                    <p className="qui-tempore">Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et.</p>
                    <div className="text-wrapper-8">Explore Venues &gt;&gt;</div>
                  </div>
                  <div className="overlap-group-4">
                    <img className="rectangle-7" alt="Rectangle" src="/img/rectangle-19377-5.png" />
                    <div className="text-wrapper-9">Popular Venues</div>
                  </div>
                </div>
              </div>
              <div className="photo">
                <div className="overlap-group-3">
                  <div className="overlap-2">
                    <p className="qui-tempore">Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et.</p>
                    <div className="text-wrapper-8">Explore Venues &gt;&gt;</div>
                  </div>
                  <div className="overlap-group-4">
                    <img className="rectangle-7" alt="Rectangle" src="/img/rectangle-19377-4.png" />
                    <div className="expert-photography">Expert Photography</div>
                  </div>
                </div>
              </div>
              <div className="decorations">
                <div className="overlap-group-3">
                  <div className="overlap-3">
                    <div className="text-wrapper-8">Explore Decorations &gt;&gt;</div>
                    <p className="qui-tempore-2">Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et.</p>
                  </div>
                  <div className="overlap-group-4">
                    <img className="rectangle-7" alt="Rectangle" src="/img/rectangle-19377-3.png" />
                    <div className="text-wrapper-9">
                      Elegant
                      <br />
                      decorations
                    </div>
                  </div>
                </div>
              </div>
              <div className="makeup">
                <div className="overlap-group-3">
                  <div className="overlap-3">
                    <div className="text-wrapper-8">Explore Decorations &gt;&gt;</div>
                    <p className="qui-tempore-2">Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et.</p>
                  </div>
                  <div className="overlap-group-4">
                    <img className="rectangle-7" alt="Rectangle" src="/img/rectangle-19377-2.png" />
                    <div className="text-wrapper-9">
                      Stylish
                      <br />
                      makeup
                    </div>
                  </div>
                </div>
              </div>
              <div className="catering">
                <div className="overlap-group-3">
                  <div className="overlap-group-5">
                    <p className="qui-tempore-3">Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et.</p>
                    <div className="text-wrapper-8">Explore Catering&gt;&gt;</div>
                  </div>
                  <div className="overlap-group-4">
                    <img className="rectangle-8" alt="Rectangle" src="/img/rectangle-19377-1.png" />
                    <div className="text-wrapper-9">Generous Catering</div>
                  </div>
                </div>
              </div>
              <div className="event-planner">
                <div className="overlap-group-3">
                  <div className="overlap-group-5">
                    <p className="qui-tempore-3">Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et.</p>
                    <div className="text-wrapper-8">Explore Catering&gt;&gt;</div>
                  </div>
                  <div className="overlap-group-4">
                    <img className="rectangle-7" alt="Rectangle" src="/img/rectangle-19377.png" />
                    <div className="one-stop-event">One-stop Event Planner</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="group-wrapper">
              <div className="group-4">
                <p className="text-wrapper-10">Copyright @ Eventfull 2023. All Rights Reserved.</p>
                <div className="rectangle-9" />
                <div className="nav-wrap">
                  <div className="nav-list-item">
                    <div className="text-wrapper-11">Company</div>
                    <div className="frame">
                      <div className="text-wrapper-12">About Us</div>
                      <div className="text-wrapper-13">Contact Us</div>
                      <div className="text-wrapper-13">Follow Us</div>
                    </div>
                  </div>
                  <div className="nav-list-item-2">
                    <div className="text-wrapper-11">Parteners</div>
                    <div className="frame-2">
                      <div className="text-wrapper-12">Paradox Hotel Vancouver</div>
                      <div className="text-wrapper-13">Fairmont Empress</div>
                      <div className="text-wrapper-13">Chinook Photography</div>
                      <p className="text-wrapper-13">Connect in the 6 Events</p>
                    </div>
                  </div>
                  <div className="nav-list-item-3">
                    <p className="text-wrapper-11">Sign Up For Eventfull Updates</p>
                    <div className="div-wrapper">
                      <div className="overlap-group-wrapper">
                        <div className="overlap-group-6">
                          <div className="text-wrapper-14">Your email address</div>
                          <div className="overlap-4">
                            <div className="text-wrapper-15">Subscribe</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="will-send-you-weekly">
                      *&nbsp;&nbsp;Will send you weekly updates for your better
                      <br />
                      vendors.
                    </p>
                  </div>
                </div>
                <div className="group-5">
                  <div className="discover-book">
                    Discover
                    <br />
                    Book
                    <br />
                    Celebrate Your Moments
                  </div>
                  <img className="group-6" alt="Group" src="/img/group-169.png" />
                </div>
                <img className="original-logo" alt="Original logo" src="/img/originallogo.png" />
              </div>
            </div>
          </footer>
          <div className="group-7">
            <div className="group-8">
              <div className="overlap-group-7">
                <div className="footer-head">
                  <div className="rectangle-10" />
                </div>
                <div className="text-wrapper-16">Explore Eventfull</div>
              </div>
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