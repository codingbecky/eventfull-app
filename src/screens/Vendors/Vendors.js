import React, { useState, useEffect } from 'react';

import axios from "axios";
import { ConfigProvider, Layout, Form, Input, Button, Space, Checkbox, Divider, message, Dropdown, Card, Col, Row, Pagination, List } from 'antd';

import { DeleteOutlined, EditOutlined, SmileOutlined, DownOutlined } from "@ant-design/icons";

import { LoginGroup } from "../../components/LoginGroup";
import { Menu } from "../../components/Menu";
import { Login2 } from "../../icons/Login2";
import { CategoryDropDown } from "../../components/CategoryDropDown";

import { getJwtToken, saveJwtToken, removeJwtToken } from '../../helper/jwt.helper';

import "./style.css";

const { Meta } = Card;

const SubmitButton = ({ form }) => {
  
  const [submittable, setSubmittable] = React.useState(false);
  
  // Watch all values
  const values = Form.useWatch([], form);
  React.useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(
        () => {
          setSubmittable(true);
        },
        () => {
          setSubmittable(false);
        }
      );
  }, [values]);
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      Login
    </Button>
  );
};

export const Vendors = () => {
  
  useEffect(()  => { document.body.classList.remove('login-style'); });

  const [messageApi, contextHolder] = message.useMessage();

  const [minValue, setMinValue] = React.useState(0);
  const [maxValue, setMaxValue] = React.useState(9);

  const [isHoverVendor, setHoverVendor] = React.useState(false);



  // const [data, setData] = useState({
  //   _id: "",
  //   userId: "",
  //   companyName: "",
  //   contactName: "",
  //   category  : "",
  //   subCategory: "",
  //   description: "",
  //   serviceDescription: "",
  //   location: "",
  //   minPrice: "",
  //   maxPrice: "",
  //   maxCapacity: "",
  //   emailAddress: "",
  //   phoneNumber: "",
  //   streetAddress: "",
  //   imgUrl: "",
  //   imgUrl1: "",
  //   imgUrl2: "",
  //   imgUrl3: "",
  // });

//  useEffect(() => {
//    axios
//      .get(`${process.env.REACT_APP_API_URL}/api/v1/vendor-detail/getall`)
//      .then((response) => {
//        console.log(response);
//        setData(response.data);
//      })
//      .catch((error) => {
//        console.log(error);
//      });
//  }, []);

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
      key: "1",
      label: "Dashboard",
      onClick: () =>
        (window.location.href = `/dashboard`)
    },
    {
      key: '2',
      label: "Sign out",
      onClick: () => { signOut(); },
    }
  ];

   const cardData = [
     { title: "Paris Hilton Hotel", description: "Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et. 1", imgUrl1: "/img/rectangle-19377-3.png" },
     { title: "Stanley Park Pavilion", description: "Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et. 2", imgUrl1: "/img/b-img171-jpg.png" },
     { title: "Paris Hilton Hotel 2", description: "Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et. 3", imgUrl1: "/img/rectangle-19377-3.png" },
     { title: "Good Morning Bakery", description: "Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et. 4", imgUrl1: "/img/b-img168-jpg-1.png" },
     { title: "Umbrella Events", description: "Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et. 5", imgUrl1: "/img/b-img166-jpg.png" },
     { title: "Good Morning Bakery 6", description: "Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et. 6", imgUrl1: "/img/b-img168-jpg-1.png" },
     { title: "Joey Restaurant", description: "Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et. 7", imgUrl1: "/img/rectangle-19379.png" },
     { title: "Memotime Photography", description: "Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et. 8", imgUrl1: "/img/rectangle-19377-2.png" },
     { title: "Joey Restaurant 9", description: "Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et. 9", imgUrl1: "/img/rectangle-19379.png" },

     { title: "Paris Hilton Hotel", description: "Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et. 1", imgUrl1: "/img/rectangle-19377-3.png" },
     { title: "Stanley Park Pavilion", description: "Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et. 2", imgUrl1: "/img/b-img171-jpg.png" },
     { title: "Good Morning Bakery", description: "Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et. 4", imgUrl1: "/img/b-img168-jpg-1.png" },
     { title: "Umbrella Events", description: "Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et. 5", imgUrl1: "/img/b-img166-jpg.png" },
     { title: "Joey Restaurant", description: "Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et. 7", imgUrl1: "/img/rectangle-19379.png" },
     { title: "Memotime Photography", description: "Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et. 8", imgUrl1: "/img/rectangle-19377-2.png" },
   ];

   const [data, setData] = useState(cardData);

  const handleChange = (value) => {
    if (value <= 1) { 
      setMinValue(0);
      setMaxValue(9);
      // this.setState({
      //   minValue: 0,
      //   maxValue: 9
      // });
    } else {
      setMinValue(maxValue);
      setMaxValue(value*9);
      // this.setState({
      //   minValue: this.state.maxValue,
      //   maxValue: value * 9
      // });
    }
  };

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
          setTimeout(function() { window.location = "/"; }, 1000);
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
      <div className="vendors">
        <div className="div-2">
          <div className="overlap-3">
            <div className="top-rectangle">
              <img className="white-logo" alt="White logo" src="/img/whitelogo.png" />
            </div>
            <div className="group-2">
              <p className="slogans">Discover · Book · Celebrate Your Moments</p>
              <div className="rectangle-2" />
            </div>
            <div className="slogan">
              <div className="rectangle-3" />
              <div className="slogans-2">
                Discover
                <br />
                Book
                <br />
                Celebrate Your Moments
              </div>
            </div>
            <div className="details">
              <div className="group-3">
                <div className="rectangle-wrapper">
                  <div className="rectangle-4" />
                </div>
                <div className="overlap-group-3">
                  <div className="rectangle-5" />
                  <div className="rectangle-6" />
                  <div className="rectangle-7" />
                  <div className="rectangle-8" />
                </div>
              </div>
            </div>
            <Menu
              className="navbar"
              divClassName="menu-instance"
              divClassName1="menu-instance"
              divClassName2="menu-instance"
              divClassNameOverride="menu-instance"
              menuHome="vendors"
            />
            <LoginGroup
              className="login-group-instance"
              icon={<Login2 className="login-2-instance" />}
              whiteLogin="default"
            />
            {/* <SearchBar className="search-bar-instance" text="Hotel" vector="/img/vector-7.svg" /> */}
            <div className="text-wrapper-8">Venue</div>
            
            <div className="group-card site-card-wrapper">
              <Row gutter={16}>
                {data &&
                  data.length > 0 &&
                  data.slice(minValue, maxValue).map(item => (

                    <Col span={8}>
                      <a href="/vendor-details">
                        <Card
                          hoverable
                          style={{ width: 350 }}
                          cover={<img alt="image" src={item.image} />}
                          // extra={<a href="#">More</a>}
                        >
                          <Meta title={item.companyName} description={item.description} />
                          <p className='card-viewprice'>{`Viewprice >>`}</p>
                        </Card>
                      </a>
                    </Col>
                  ))}
              </Row>

              <div className='vendors-pagination'>
                <Pagination
                  defaultCurrent={1}
                  defaultPageSize={9}
                  onChange={handleChange}
                  total={data.length}
                />
              </div>
              
            </div>

            

            {/* <div className='group-card'>
              <List
                grid={{ gutter: 3, column: 3 }}
                dataSource={cardData}
                renderItem={(item) => (
                  <List.Item>
                    <Card
                      hoverable
                      style={{ width: 350 }}
                      cover={<img alt="example" src={item.imgUrl} />}
                    >
                      <Meta title={item.title} description={item.description} />
                    </Card>
                  </List.Item>
                )}
              />
            </div> */}
            
            {/* <div className="group-4">
              <p className="qui-tempore">Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et.</p>
              <img className="rectangle-9" alt="Rectangle" src="/img/rectangle-19377-3.png" />
              <div className="overlap-4">
                <div className="text-wrapper-9">Available!</div>
              </div>
              <div className="text-wrapper-10">Paris Hilton Hotel</div>
            </div>
            <p className="p">Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et.</p>
            <img className="rectangle-10" alt="Rectangle" src="/img/rectangle-19379.png" />
            <div className="rectangle-11" />
            <div className="joey-restaurant">Joey Restaurant</div>
            <div className="group-5">
              <div className="viewprice">Viewprice &gt;&gt;</div>
              <img className="vector-4" alt="Vector" src="/img/vector-14.svg" />
            </div>
            <div className="group-6">
              <div className="viewprice-wrapper">
                <div className="viewprice-2">Viewprice &gt;&gt;</div>
              </div>
              <img className="vector-5" alt="Vector" src="/img/vector-16.svg" />
            </div>
            <div className="group-7">
              <div className="viewprice">Viewprice &gt;&gt;</div>
              <img className="vector-6" alt="Vector" src="/img/vector-14.svg" />
            </div>
            <div className="group-8">
              <p className="qui-tempore">Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et.</p>
              <img className="rectangle-9" alt="Rectangle" src="/img/rectangle-19377-2.png" />
              <div className="rectangle-12" />
              <div className="memotime-photography">Memotime Photography</div>
            </div>
            <div className="group-9">
              <div className="text-wrapper-11">1</div>
              <div className="text-wrapper-12">2</div>
              <div className="text-wrapper-13">3</div>
              <div className="text-wrapper-14">4</div>
              <div className="text-wrapper-15">...</div>
              <img className="bi-chevron-down" alt="Bi chevron down" src="/img/bi-chevron-down.svg" />
              <img className="bi-chevron-down-2" alt="Bi chevron down" src="/img/bi-chevron-down-1.svg" />
            </div>
            <div className="group-10">
              <div className="group-11">
                <div className="overlap-group-4">
                  <div className="group-12">
                    <p className="qui-tempore-2">Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et.</p>
                    <div className="rectangle-13" />
                    <div className="stanley-park">Stanley Park Pavilion</div>
                  </div>
                  <div className="viewprice-3">Viewprice &gt;&gt;</div>
                  <img className="vector-7" alt="Vector" src="/img/vector-15.svg" />
                  <img className="b-jpg" alt="B jpg" src="/img/b-img171-jpg.png" />
                </div>
              </div>
            </div>
            <div className="group-13">
              <div className="overlap-5">
                <div className="group-14">
                  <p className="qui-tempore-3">Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et.</p>
                  <div className="rectangle-13" />
                  <div className="GOOD-MORNING-BAKERY">Good Morning Bakery</div>
                </div>
                <div className="viewprice-4">Viewprice &gt;&gt;</div>
                <img className="vector-8" alt="Vector" src="/img/vector-15.svg" />
              </div>
              <img className="b-img-jpg" alt="B jpg" src="/img/b-img168-jpg-1.png" />
            </div>
            <div className="group-15">
              <p className="qui-tempore">Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et.</p>
              <img className="rectangle-9" alt="Rectangle" src="/img/rectangle-19377-3.png" />
              <div className="overlap-4">
                <div className="text-wrapper-9">Good Deal！</div>
              </div>
              <div className="text-wrapper-10">Paris Hilton Hotel</div>
            </div>
            <p className="qui-tempore-4">Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et.</p>
            <img className="rectangle-14" alt="Rectangle" src="/img/rectangle-19379.png" />
            <div className="rectangle-15" />
            <div className="joey-restaurant-2">Joey Restaurant</div>
            <div className="group-16">
              <div className="viewprice">Viewprice &gt;&gt;</div>
              <img className="vector-4" alt="Vector" src="/img/vector-14.svg" />
            </div>
            <div className="group-17">
              <div className="viewprice">Viewprice &gt;&gt;</div>
              <img className="vector-6" alt="Vector" src="/img/vector-14.svg" />
            </div>
            <div className="group-18">
              <div className="overlap-5">
                <div className="group-14">
                  <p className="qui-tempore-3">Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et.</p>
                  <div className="rectangle-13" />
                  <div className="GOOD-MORNING-BAKERY">Good Morning Bakery</div>
                </div>
                <div className="viewprice-4">Viewprice &gt;&gt;</div>
                <img className="vector-8" alt="Vector" src="/img/vector-15.svg" />
              </div>
              <img className="b-img-jpg" alt="B jpg" src="/img/b-img168-jpg-1.png" />
            </div>
            <div className="group-19">
              <div className="overlap-6">
                <img className="vector-9" alt="Vector" src="/img/vector-16.svg" />
                <div className="overlap-7">
                  <div className="viewprice-5">Viewprice &gt;&gt;</div>
                  <div className="group-20">
                    <p className="qui-tempore-5">Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et.</p>
                    <div className="rectangle-16" />
                    <div className="umbrella-events">Umbrella Events</div>
                    <img className="vector-10" alt="Vector" src="/img/vector-17.svg" />
                  </div>
                  <img className="b-jpg" alt="B jpg" src="/img/b-img166-jpg.png" />
                </div>
              </div>
            </div> */}

          </div>
          <footer className="footer">
            <div className="group-21">
              <div className="group-22">
                <p className="text-wrapper-16">Copyright @ Eventfull 2023. All Rights Reserved.</p>
                <div className="rectangle-17" />
                <div className="nav-wrap">
                  <div className="nav-list-item">
                    <div className="text-wrapper-17">Company</div>
                    <div className="frame-3">
                      <div className="text-wrapper-18">About Us</div>
                      <div className="text-wrapper-19">Contact Us</div>
                      <div className="text-wrapper-19">Follow Us</div>
                    </div>
                  </div>
                  <div className="nav-list-item-2">
                    <div className="text-wrapper-17">Parteners</div>
                    <div className="frame-4">
                      <div className="text-wrapper-18">Paradox Hotel Vancouver</div>
                      <div className="text-wrapper-19">Fairmont Empress</div>
                      <div className="text-wrapper-19">Chinook Photography</div>
                      <p className="text-wrapper-19">Connect in the 6 Events</p>
                    </div>
                  </div>
                  <div className="nav-list-item-3">
                    <p className="text-wrapper-17">Sign Up For Eventfull Updates</p>
                    <div className="group-23">
                      <div className="group-24">
                        <div className="overlap-group-5">
                          <div className="text-wrapper-20">Your email address</div>
                          <div className="overlap-8">
                            <div className="text-wrapper-21">Subscribe</div>
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
                <div className="group-25">
                  <div className="discover-book">
                    Discover
                    <br />
                    Book
                    <br />
                    Celebrate Your Moments
                  </div>
                  <img className="group-26" alt="Group" src="/img/group-169.png" />
                </div>
                <img className="original-logo" alt="Original logo" src="/img/originallogo.png" />
              </div>
            </div>
          </footer>
          <div className="overlap-9">
            <div className="footer-head">
              <div className="rectangle-18" />
            </div>
            <div className="text-wrapper-22">Explore Eventfull</div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};