import React from "react";
import { BaseCalendar } from "../../components/BaseCalendar";
import { ElementInformation } from "../../components/ElementInformation";
import { ElementStarFilled } from "../../components/ElementStarFilled";
import { ElementStarFilledWrapper } from "../../components/ElementStarFilledWrapper";
import { ElementStarHalfFilled } from "../../components/ElementStarHalfFilled";
import { ElementStarUnfilled } from "../../components/ElementStarUnfilled";
import { LoginGroup } from "../../components/LoginGroup";
import { Menu } from "../../components/Menu";
import { SearchBar } from "../../components/SearchBar";
import { TestimonialSocial } from "../../components/TestimonialSocial";
import { Login } from "../../icons/Login";
import { ThirtyTwoChevronLeft } from "../../icons/ThirtyTwoChevronLeft";
import { ThirtyTwoChevronRight } from "../../icons/ThirtyTwoChevronRight";
import "./style.css";

export const VendorDetailsPage = () => {
  return (
    <div className="vendor-details-page">
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
              <div className="overlap-4">
                <div className="overlap-5">
                  <p className="located-right-in">
                    Located right in Banff for over 20 years, the Elope in Banff team are expert wedding planners that
                    are passionate about planning smaller, intimate weddings in the spectacular Rocky Mountains.
                    Christianne and Sharon specialize in small-scale weddings and elopements. With their knowledge of
                    the Canadian Rockies and the areas surrounding Banff, they will plan a relaxing elopement wedding
                    for couples looking for a breathtaking setting to celebrate their special day. Small, intimate
                    weddings are their true passion.
                    <br />
                    <br />
                    Located right in Banff for over 20 years, the Elope in Banff team are expert wedding planners that
                    are passionate about planning smaller, intimate weddings in the spectacular Rocky Mountains.
                    Christianne and Sharon specialize in small-scale weddings and elopements. With their knowledge of
                    the Canadian Rockies and the areas surrounding Banff, they will plan a relaxing elopement wedding
                    for couples looking for a breathtaking setting to celebrate their special day. Small, intimate
                    weddings are their true passion.
                  </p>
                  <div className="text-wrapper-11">Service Description</div>
                </div>
                <div className="group-4">
                  <div className="overlap-group-3">
                    <p className="text-wrapper-12">$2,000 - 10000 / Package</p>
                    <div className="text-wrapper-13">Elope In Banff</div>
                  </div>
                  <img className="group-5" alt="Group" src="/img/group-1000001721.png" />
                </div>
                <div className="text-wrapper-14">Photo Gallery</div>
                <div className="text-wrapper-15">Customer Reviews</div>
                <img className="rectangle-4" alt="Rectangle" src="/img/rectangle-19322.png" />
                <img className="rectangle-5" alt="Rectangle" src="/img/rectangle-19323.png" />
                <img className="rectangle-6" alt="Rectangle" src="/img/rectangle-19324.png" />
                <div className="overlap-6">
                  <div className="overlap-7">
                    <div className="text-wrapper-16">Name</div>
                    <img className="img-2" alt="Ooui user avatar" src="/img/ooui-user-avatar-outline.svg" />
                  </div>
                  <div className="overlap-8">
                    <div className="text-wrapper-17">Email</div>
                    <img className="img-2" alt="Clarity email line" src="/img/clarity-email-line.svg" />
                  </div>
                  <div className="overlap-9">
                    <img className="img-2" alt="Clarity email line" src="/img/clarity-email-line-1.svg" />
                    <div className="text-wrapper-18">Confirm Email</div>
                  </div>
                  <div className="overlap-10">
                    <div className="text-wrapper-19">Phone</div>
                    <img className="img-2" alt="Carbon phone" src="/img/carbon-phone.svg" />
                  </div>
                  <div className="overlap-11">
                    <div className="text-wrapper-20">dd-mm-yy</div>
                    <img className="img-2" alt="Bi calendar date" src="/img/bi-calendar-date.svg" />
                  </div>
                  <div className="overlap-12">
                    <div className="text-wrapper-21">Number of guests</div>
                    <img className="img-2" alt="Cil tags" src="/img/cil-tags.svg" />
                  </div>
                  <div className="overlap-13">
                    <div className="text-wrapper-22">Message</div>
                    <div className="overlap-group-4">
                      <img className="line" alt="Line" src="/img/line-10.svg" />
                      <img className="line-2" alt="Line" src="/img/line-11.svg" />
                    </div>
                    <img
                      className="ant-design-message"
                      alt="Ant design message"
                      src="/img/ant-design-message-outlined.svg"
                    />
                  </div>
                  <p className="text-wrapper-23">
                    Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem
                    neque iste expedita est dolo.
                  </p>
                  <div className="text-wrapper-24">Book This Vendor</div>
                  <div className="button-search">
                    <div className="text-wrapper-25">Book Now</div>
                  </div>
                  <div className="button-search-2">
                    <div className="text-wrapper-26">Check Availability</div>
                  </div>
                </div>
              </div>
              <div className="overlap-14">
                <div className="rectangle-7" />
                <div className="rectangle-8" />
                <div className="rectangle-9" />
                <div className="rectangle-10" />
              </div>
            </div>
          </div>
          <p className="free-cancellation">
            <span className="text-wrapper-27">
              Free cancellation
              <br />
            </span>
            <span className="text-wrapper-28">
              Cancel up to 24 hours in advance for a full refund
              <br />
              <br />
            </span>
            <span className="text-wrapper-27">
              Reserve now &amp; pay later
              <br />
            </span>
            <span className="text-wrapper-28">
              Keep your event plans flexible — book your spot and pay nothing today.
              <br />
              <br />
            </span>
            <span className="text-wrapper-27">
              Includes
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="text-wrapper-28">
              {" "}
              Furniture rental
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Deliveries from hotels outside the mentioned
              area may be available without an additional fee.
              <br />
            </span>
          </p>
          <p className="overall-rating">
            <span className="text-wrapper-29">
              Overall Rating&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br />
              <br />
            </span>
            <span className="text-wrapper-30">
              <br />
              4.5/5
            </span>
          </p>
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
            icon={<Login className="login-instance" />}
            whiteLogin="default"
          />
          <SearchBar className="search-bar-instance" text="Hotel" vector="/img/vector.svg" />
          <div className="text-wrapper-31">Hotel</div>
          <ElementInformation
            className="thirty-two-information"
            overlapGroupClassName="element-information-instance"
            union="/img/union.svg"
            unionClassName="thirty-two-information-instance"
          />
          <div className="rating-star">
            <div className="overlap-15">
              <ElementStarFilled
                className="twenty-four-star-filled"
                star="/img/star-1-17.svg"
                starClassName="design-component-instance-node"
              />
              <ElementStarFilled
                className="element-star-filled-instance"
                star="/img/star-1-17.svg"
                starClassName="design-component-instance-node"
              />
              <ElementStarFilled
                className="twenty-four-star-filled-instance"
                star="/img/star-1-17.svg"
                starClassName="design-component-instance-node"
              />
              <ElementStarUnfilled
                className="twenty-four-star-unfilled"
                star="/img/star-1-16.svg"
                starClassName="design-component-instance-node"
              />
              <ElementStarHalfFilled
                className="twenty-four-star-half-filled"
                overlapGroupClassName="element-star-half-filled-instance"
                subtract="/img/subtract.svg"
                subtractClassName="twenty-four-star-half-filled-instance"
              />
            </div>
          </div>
          <div className="testimonial-social-wrapper">
            <TestimonialSocial
              avatar="/img/avatar-2.png"
              avatarClassName="testimonial-social-instance"
              className="testimonial-social-proof"
              divClassName="testimonial-social-2"
              ratingStarRow={
                <ElementStarFilledWrapper
                  className="design-component-instance-node-3"
                  star="/img/star-1-10.svg"
                  starClassName="design-component-instance-node-2"
                />
              }
              ratingStarRowElementStarFilledWrapperElementStarFilledClassName="design-component-instance-node-3"
              ratingStarRowElementStarFilledWrapperElementStarFilledClassNameOverride="design-component-instance-node-3"
              ratingStarRowElementStarFilledWrapperImg="/img/star-1-14.svg"
              ratingStarRowElementStarFilledWrapperImgClassName="design-component-instance-node-2"
              ratingStarRowElementStarFilledWrapperImgClassNameOverride="design-component-instance-node-2"
              ratingStarRowElementStarFilledWrapperStar="/img/star-1-11.svg"
              ratingStarRowElementStarFilledWrapperStar1="/img/star-1-13.svg"
              ratingStarRowElementStarFilledWrapperStar2="/img/star-1-12.svg"
              ratingStarRowElementStarFilledWrapperStarClassName="design-component-instance-node-2"
              ratingStarRowElementStarFilledWrapperStarClassNameOverride="design-component-instance-node-2"
              ratingStarRowElementStarFilledWrapperStarWrapperClassName="design-component-instance-node-3"
              ratingStarRowElementStarFilledWrapperStarWrapperClassNameOverride="design-component-instance-node-3"
              ratingStarRowRatingStarRowClassName="testimonial-social-3"
              text="Yifei Chen"
              text1="Seoul, South Korea "
              text2="What a great experience using eventful! I booked my wedding venue through the platform, it was really smooth and they supported me a lot!Highly recommended! "
              textClassName="testimonial-social-proof-instance"
            />
          </div>
          <div className="testimonial-social-proof-wrapper">
            <TestimonialSocial
              avatar="/img/avatar-1.png"
              avatarClassName="testimonial-social-instance"
              className="testimonial-social-proof"
              divClassName="testimonial-social-2"
              ratingStarRow={
                <ElementStarFilledWrapper
                  className="design-component-instance-node-3"
                  star="/img/star-1-5.svg"
                  starClassName="design-component-instance-node-2"
                />
              }
              ratingStarRowElementStarFilledWrapperElementStarFilledClassName="design-component-instance-node-3"
              ratingStarRowElementStarFilledWrapperElementStarFilledClassNameOverride="design-component-instance-node-3"
              ratingStarRowElementStarFilledWrapperImg="/img/star-1-9.svg"
              ratingStarRowElementStarFilledWrapperImgClassName="design-component-instance-node-2"
              ratingStarRowElementStarFilledWrapperImgClassNameOverride="design-component-instance-node-2"
              ratingStarRowElementStarFilledWrapperStar="/img/star-1-6.svg"
              ratingStarRowElementStarFilledWrapperStar1="/img/star-1-8.svg"
              ratingStarRowElementStarFilledWrapperStar2="/img/star-1-7.svg"
              ratingStarRowElementStarFilledWrapperStarClassName="design-component-instance-node-2"
              ratingStarRowElementStarFilledWrapperStarClassNameOverride="design-component-instance-node-2"
              ratingStarRowElementStarFilledWrapperStarWrapperClassName="design-component-instance-node-3"
              ratingStarRowElementStarFilledWrapperStarWrapperClassNameOverride="design-component-instance-node-3"
              ratingStarRowRatingStarRowClassName="testimonial-social-3"
              text="Connie Z"
              text1="Seoul, South Korea "
              text2="What a great experience using eventful! I booked my wedding venue through the platform, it was really smooth and they supported me a lot!Highly recommended! "
              textClassName="testimonial-social-proof-instance"
            />
          </div>
          {/* <div className="testimonial-social-instance-wrapper">
            <TestimonialSocial
              avatar="/img/avatar.png"
              avatarClassName="testimonial-social-instance"
              className="testimonial-social-proof"
              divClassName="testimonial-social-2"
              ratingStarRow={
                <ElementStarFilledWrapper
                  className="design-component-instance-node-3"
                  star="/img/star-1.svg"
                  starClassName="design-component-instance-node-2"
                />
              }
              ratingStarRowElementStarFilledWrapperElementStarFilledClassName="design-component-instance-node-3"
              ratingStarRowElementStarFilledWrapperElementStarFilledClassNameOverride="design-component-instance-node-3"
              ratingStarRowElementStarFilledWrapperImg="/img/star-1-4.svg"
              ratingStarRowElementStarFilledWrapperImgClassName="design-component-instance-node-2"
              ratingStarRowElementStarFilledWrapperImgClassNameOverride="design-component-instance-node-2"
              ratingStarRowElementStarFilledWrapperStar="/img/star-1-1.svg"
              ratingStarRowElementStarFilledWrapperStar1="/img/star-1-3.svg"
              ratingStarRowElementStarFilledWrapperStar2="/img/star-1-2.svg"
              ratingStarRowElementStarFilledWrapperStarClassName="design-component-instance-node-2"
              ratingStarRowElementStarFilledWrapperStarClassNameOverride="design-component-instance-node-2"
              ratingStarRowElementStarFilledWrapperStarWrapperClassName="design-component-instance-node-3"
              ratingStarRowElementStarFilledWrapperStarWrapperClassNameOverride="design-component-instance-node-3"
              ratingStarRowRatingStarRowClassName="testimonial-social-3"
              text="Becky J"
              text1="Seoul, South Korea "
              text2="What a great experience using eventful! I booked my wedding venue through the platform, it was really smooth and they supported me a lot!Highly recommended! "
              textClassName="testimonial-social-proof-instance"
            />
          </div> */}
          {/* <div className="rectangle-11" /> */}
          <div className="calendar-unlock">
            <div className="overlap-16">
              <div className="calendar-section">
              </div>
              <div className="calendar-section-2" />
            </div>
          </div>
          <div className="rectangle-12" />
          <p className="unlock-membership">
            <span className="text-wrapper-32">
              Unlock Membership
              <br />
              Booking Experience
              <br />
              <br />
            </span>
            <span className="text-wrapper-33">Subscribe</span>
            <span className="text-wrapper-34">&nbsp;</span>
            <span className="text-wrapper-35">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Maybe later</span>
          </p>
        </div>
        <footer className="footer">
          <div className="group-6">
            <div className="group-7">
              <p className="text-wrapper-36">Copyright @ Eventfull 2023. All Rights Reserved.</p>
              <div className="rectangle-13" />
              <div className="nav-wrap">
                <div className="nav-list-item">
                  <div className="text-wrapper-37">Company</div>
                  <div className="frame-3">
                    <div className="text-wrapper-38">About Us</div>
                    <div className="text-wrapper-39">Contact Us</div>
                    <div className="text-wrapper-39">Follow Us</div>
                  </div>
                </div>
                <div className="nav-list-item-2">
                  <div className="text-wrapper-37">Parteners</div>
                  <div className="frame-4">
                    <div className="text-wrapper-38">Paradox Hotel Vancouver</div>
                    <div className="text-wrapper-39">Fairmont Empress</div>
                    <div className="text-wrapper-39">Chinook Photography</div>
                    <p className="text-wrapper-39">Connect in the 6 Events</p>
                  </div>
                </div>
                <div className="nav-list-item-3">
                  <p className="text-wrapper-37">Sign Up For Eventfull Updates</p>
                  <div className="group-8">
                    <div className="group-9">
                      <div className="overlap-group-5">
                        <div className="text-wrapper-40">Your email address</div>
                        <div className="overlap-17">
                          <div className="text-wrapper-41">Subscribe</div>
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
              <div className="group-10">
                <div className="discover-book">
                  Discover
                  <br />
                  Book
                  <br />
                  Celebrate Your Moments
                </div>
                <img className="group-11" alt="Group" src="/img/group-169.png" />
              </div>
              <img className="original-logo" alt="Original logo" src="/img/originallogo.png" />
            </div>
          </div>
        </footer>
        <div className="overlap-18">
          <div className="footer-head">
            <div className="rectangle-14" />
          </div>
          <div className="text-wrapper-42">Explore Eventfull</div>
        </div>
      </div>
    </div>
  );
};
