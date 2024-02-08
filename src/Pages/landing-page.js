import React from 'react'
import { Helmet } from 'react-helmet'
import SolidButton from '../components/Home/solid-button'
import PlaceCard from '../components/Home/place-card'
import './landing-page.css'
import '../components/Home/outline-button.js'
import OutlineButton from '../components/Home/outline-button.js'
import { noConflict } from 'lodash'

const LandingPage = (props) => {
  return (
    <div className="landing-page-container">
      <Helmet>
        <title>Travel Agency</title>
        <meta property="og:title" content="Travel Agency" />
      </Helmet>
      <div className="landing-page-top-container">
        <nav data-role="Header" className="landing-page-navbar">
          <h1>Ai Planner</h1>
          <div className="landing-page-right-side">
            <div className="landing-page-links-container">
              {/* <span className="landing-page-text">Home</span> */}
              <span className="landing-page-text01">
                <button
                  style={{
                    color: 'var(--dl-color-gray-black)',
                    paddingTop: 'var(--dl-space-space-unit)',
                    // borderColor: 'var(--dl-color-primary-100)',
                    // borderWidth: '1px',
                    border: 'none',
                    paddingLeft: 'var(--dl-space-space-doubleunit)',
                    borderRadius: '50px',
                    paddingRight: 'var(--dl-space-space-doubleunit)',
                    paddingBottom: 'var(--dl-space-space-unit)',
                    backgroundColor: 'var(--dl-color-gray-white)',
                    marginRight: '-20px',
                    cursor: 'pointer',
                    transition: 'transform 0.3s, box-shadow 0.3s, background-color 0.3s',
                  }}
                  
                  className="zoom-in-hover"
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'scale(1.1)';
    e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    e.currentTarget.style.backgroundColor = 'gray';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = '';
    e.currentTarget.style.boxShadow = '';
    e.currentTarget.style.backgroundColor = 'var(--dl-color-gray-white)';
  }}
                >
                  About Us
                </button>
              </span>
              <span className="landing-page-text02">
                <button
                  style={{
                    color: 'var(--dl-color-gray-black)',
                    paddingTop: 'var(--dl-space-space-unit)',
                    // borderColor: 'var(--dl-color-primary-100)',
                    // borderWidth: '1px',
                    border: 'none',
                    paddingLeft: 'var(--dl-space-space-doubleunit)',
                    borderRadius: '50px',
                    paddingRight: 'var(--dl-space-space-doubleunit)',
                    paddingBottom: 'var(--dl-space-space-unit)',
                    backgroundColor: 'var(--dl-color-gray-white)',
                    cursor: 'pointer',
                    transition: 'transform 0.3s, box-shadow 0.3s, background-color 0.3s',
                  }}
                  className="zoom-in-hover"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
                    e.currentTarget.style.backgroundColor = 'gray';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = '';
                    e.currentTarget.style.boxShadow = '';
                    e.currentTarget.style.backgroundColor = 'var(--dl-color-gray-white)';
                  }}
                >
                  Contact Us
                </button>
              </span>
            </div>
            <OutlineButton button1="LOGIN"></OutlineButton>
          </div>
          <div data-role="BurgerMenu" className="landing-page-burger-menu">
            <svg viewBox="0 0 1024 1024" className="landing-page-burger-menu1">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="landing-page-mobile-menu">
            <div className="landing-page-nav">
              <div className="landing-page-top">
                <h1>Travel</h1>
                <div
                  data-role="CloseMobileMenu"
                  className="landing-page-close-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="landing-page-icon03">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="landing-page-right-side1">
                <div className="landing-page-links-container1">
                  <span className="landing-page-text03">Home</span>
                  <span className="landing-page-text04">About</span>
                  <span className="landing-page-text05">Tour Packages</span>
                  <span>Contact</span>
                </div>
                <a href="#main-section" className="landing-page-link">
                  <SolidButton button="Explore places"></SolidButton>
                </a>
              </div>
            </div>
            <div className="landing-page-follow-container">
              <span className="landing-page-text07">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="landing-page-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link01"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="landing-page-icon05"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link02"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="landing-page-icon07"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link03"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="landing-page-icon09"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="landing-page-hero">
          <div className="landing-page-content-container">
            <h1 className="Heading landing-page-text08">Book an exclusive</h1>
            <h2 className="Subheading landing-page-subheading">
              trip for your personal travel based on your needs.
            </h2>
            <span className="landing-page-text09">
              <span>customize your travel based on your preferences. </span>
              <br></br>
              <span>Your Trip, Your Money, Your Comfort.</span>
              <br></br>
            </span>
            <SolidButton button="BOOK NOW"></SolidButton>
          </div>
        </div>
      </div>
      <div id="main-section" className="landing-page-main">
        <h1>Most famous places</h1>
        <span className="landing-page-text15">Recommended</span>
        <div className="landing-page-cards-container">
          <PlaceCard
            city="Jammu"
            image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAvwMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAECBQYAB//EAEMQAAIBAwMBBQYEAwUFCQEAAAECAwAEEQUSITETIkFRYQYUcYGRoSMyscFCctEVQ6Lh8CQzNJLCUlNUYnOTsuLxFv/EABsBAAIDAQEBAAAAAAAAAAAAAAIDAAEEBQYH/8QAPREAAQQABAEJBwIEBQUAAAAAAQACAxEEEiExQQUTIlFhcYGRoRQyQrHB0fAV4TNScvEjQ1NigkSSk9Li/9oADAMBAAIRAxEAPwCor1q+cKasKlNRUpq1FNRUVYCoqVgp8qlq8pVhGT4VWZEIyiCE+VVmRCEqwhPlUzohCriChzpggVuwFVmRcyvdhV5lXMBQYKvOqMAVDBV5kBgVDCfKrzIDCUMoR4VdpeQqpFS1VUqYq1FU1StRUVqKEq1U9KpWqmorVxUQqatRSOaipEVCaq0QaSirETVZkYitFWGhLk5sIRlhHlVZk0RBEWIeVVmRiIK4j9KrMjEYVhH6VWZEI1fs6mZFza92dS1fNr3Z1LVc2oMfpUzKubUGP0qZlRjVDGPKrzITGhtEM9KvMlmMIbQjyqw5AYQhND6UWdKdAEF4jV50ownghFCKu0BaVQg1LVUqmooqmqRK4BNS1VEoixk1WZMERR44aEuTWwo6x+lBmT2xIyx+lDaaI0RY/KpmTAxECefA8zVZkfN0pUoxwGGfLxqWrABNBFCjOKq0WSt1bbjqKrMryUrbOnHX0qWiyqSmPKqzKZUBrm3VyjyqCPOjAJCUZI2miUQFGxhlIPkapGKOy8U4/wAqrMpkVdlXarIqsnpV5kJYhlPSpaEsVGTPhUtCWITJ6VeZCY0F4xV5ksxBAeKrDkp0KC0VEHJJhQWQirzJZYQnEiAxkUGZa2w0rK8Sk73C8+Jpee08MaNyjxNG4JRgQOc1RemtjB1H1+yLviUfnB+HNDm7EYY3rQzcBSBI4UegyTxzUDr0CjgG6k6eq9JfQzsqwK6qT3lPWjyOA6SUcTG9wbGjPMrNksRgAqM9KEDRNc8cUpaTvHJI3O7bg+f+uaa5oICxwyFr3HsXpNx2KSMqc9easAUo7NoAU1HcugaRZGZRwoc/egIT2SEW4HTgrQy3JnYO7BAoZgAOao5Q1WwymTU6AAlWe4fs3XHczndVBotMdI6j1LOnMczYVQsh6etPbbVzpXMkNcUvHu3DAVSo5ozskMsnTgpEsqNuWRt381SgQpneDdoi6hdf9708wKExt6kYxU17q3v911MnXoNgqsjUftM3Eo6ahIMCVA/8pwfpQFg4LQ3EuA6QBV11GJjgoy1WQohimE1RQ5dRjBIEbn1qshUdiWXVJf8AtBNxzG+PlVUbpWJQRmoqffoj/A4+lXlKDnmdSDLexfwq5qUULpWcAlnvD1EYx4c0SUXXwVjK9wyo7AKOTxQ7JgcZCAUSdo9jRhRg9O7QNFkpz3Na0AJyBo4oUj2HP8RLYzQkF2qewtjaG+ai7uyUAiAijAKqg8fU5o2M160qecgdHQJFlOcc4AFMFb9qxuzA1fD5q0eVkUg4PWmHUJLSWv04LRcByreY6UoaLoua1xBXlhIkVwcnJU+oqZtCEIiIeCmxGCW5AJ6sfL0pdrVkBVkC7jlFYdAMdfWodlbQL2XsY3HON1S1KqykbsYIKsdnl4ZpjTosc7SXBwKUUgsW8qsScClugvpDdGhI3uXGQwwasmxoqaCHEnirRW+XyADxyatz9FI4Bm0CHcwbZMqPpUY7RBPBTtFWNeFDdSajiqjbdAosqAMVz4UvOtbodSFJiXHdHe8ceFVn4qxCOA3S8iqoJJGM0t84ATIsG4vF7Ws97hUm6jZisTpiHWuszCgxVSLC8bNuJ4HSnsnHFYZcEbBAUyJvPLA+orSJGkLnyYd4OopDmjKkbVyKIOSnRkGgrrhBgck1N1Pd0CNGvey/XqAaC9Voa3o25eMyBvE5qN2Cj3ak0vSOZUBEfHgaNtDis8pLxoFZhvX54q27qSdIHvryULH0yTkGjLklseuq0WAUqB0GKUug5tEI6fmLY5PgaE9Sc0USUUAmqTateyFBz08TVbqtkKSQHdn5etGAlOeDaVlb8JwSOORSZn0FowsZcQDss2K4ja47NHHaFMlc9Kzxzl7qWqbBiJmZaUEfdJwa3g6Ljlt6o0fcbyqHVEwZTamZcvkc8ZqN0VvAcbS06rGcqeCfpQOerbEAQ5VlbcqyDq3TPxpDn9FbGM6WqpFKRvyef3oQ/dMdHVGktdPtOxjyefiKS46rQwdGwsVyyzNhgcE48frWa9Ta2FvRFKgnO1RkAsdxbPHSpm10Vhoo2iWty8IYOScnjNOjkoFZMRDnI0WkjLLErKSPUeNdCN9hcSeIB2irbSBlUg/w5JNW0220uQBsmVMMqzYT0yDnBqHQkomlz2hrT1pd0KyYzkDoc9aQHLY+Hfw+aPasdwGc8ZGOlaAeisGVwfumuxkfBiicsfACiEjRuVToHvFsabKVn1Gysrs299eW8My8sjyqNo9eaS7GQ3VrTHybiDRIU3HtJoluoL6jHKQeFgBcn9qScY0Doi1tGAOmd1Ktp7XaZNKY55WhYY/Mhx9RQNxgrpBOfgacQHLVj1jTpiiW97bzPISqxxSBnz/L1pjcTGUL8JK0aBWhuoZxthmR2GQQpzg+RFNLxuFla03lV1QMgyDv8iOlEJL2VGGhrul7iNY8pJjbJ0z0JpUtHRPw4czUcFzungLrYhYEiOJlBHo3H2rn4c5ZSF1cYwPhaul1C4Frbds0iJ/Njvk+pYAU/GY12Hy5RdrLyfydHi82c1VdXb1rDb2rsYpXhuJJI5EJDKYkOCPg5rL+ozkWGj1W79Ew4NFx9EAe1GkS3iXC3N0zRIcxpbErjxJ71UcdiDrlH54omcj4dvxH88FWT2u011GTdg85K2ecf4qZ7XIRqEp3JkLdia/OxC//AK/TCka77vAPJNp/96B+Jky6BMZgocx1KI3tPpcR2yzzIzYcBrY5APQ/m9aWMXNrTU53JsJq3HyQrr2h0adkja4kZn/KY4OQf+ahdipHg22vFW3ARxkAOQJp7X3wxx3DP3DuBj2c/XmiY5znHMOCCSNrGDJrqs6aWT3sRgZjC53ZwOask3SFrRlJ60xCzzAhc8knI8KbHroFnnOULcsWyoQkZAyRnOK6cZ4LgzC+kgWDrEo3nAxkZYc1MO4ZKKTjWlstgJ5JbJci7n28cYlKfHoaz4l9nQro4GABvSbaYB0Z5oc3aoruVz7z6HzPwrJmPWumWMoDKl702MXa+7XjvEj9m4cruJI4xgcjI60b5pMhspEeGg54EN1B6zpp5Fcve6trEkNrBbSMEmALbMrtOTkd3w6fSs7iW7lbGnOAGiljpZ6i912NrbxXLuA5aFSw58z4fOmMt3uhZpoxGek5b8Oja5Cq77XTU3jBVwc0ToHjdSKdvwhOR6bqs84it1tACGYHb1AIU5+f61G4bNxRuxxYTorjQvaENlFsUKnKsM5B8xVnAuGtoRyoDplUDU/aXS7xIrkR7JpNrXCx5H/N5/GgcyRgoprJmPNgap7SJ9S7E3R23C3M0cvaSuFAZiFAwBwMijY5wFWkS1Zd91o6nJqBtRvs4EVGDZM+c/4RTJn6WUuBrgaAv0XOaK9lbXqma+VZTuLNN3sMcYA6cYH3rO0Ubatj5W1/iDbgF0llCNb1aHeBPY2kZdpGiIV2bAAzkg4AP/NWLGTOd0bXU5OijawvA360trWp22mq0sNqLhEk2zyQle4TyM+Z9BWBkJkOpXSdNzYsNTcb2NxpE952UXuzxSFnAOeg445oWseHZeKJ0jcufgvnt5NayMpsrW9G4qBunBGOSeOufnXTZE8DpELmOxkbicoQbW2muJhbGFklkcGJXOAxz0BJ64z9KuQFmp2RQysk6I3Wj7VGSw1a2ee3kZhYwocggbgvPPTzpETQ9lAp80nNvDiLU+ysseoa7AZFVlVS6gjO05A/emtjytdfUkSS58hHWE7PLImqo8kCJCWZI955I6dOmMj708OpwcsTmktLQVmapLsklS3hbkjGOQvXmqdILNKMiIAtX0VgFKzzRq2M5cgHHpWjDntWHGgjWtFqf2hHbyyNF+I5RV3LyOCxPPzFamPyEuXLxBYY2tB70CZraWW90u9KxyxsVhM3DN49fP8ArSWyxyREeS1mCfD4ljxdcepYt5o16gimglDxyHBEUrDH3NYwK0XWfqAR6JW50/UYrh0haYqjEZklOeD6UYBSHkAkA7Ij2N03ZlLh48jkvcF+fIAAVYB2KsuFDKStmztpY0tA5kkYB1J5OSQ3n86twIQMN6Kul3Op2Fx+HiIAcxkbVJz/AJitDJ60CwuwZvWwula6vb6GA9lEl3K2wQxvnPewDjw/zoZpLo2n4aIgEEJyES6TeLLeRkt2boUXGN2/wP6imQCQk0LCTiXwxtBc6j3I15rAkjHuwKyZHL+FazFIRpoud7dADsT6JWbU2kt3gaIEOWJOcYBNF7NfvFLPKWXVjde1Kx3E0VusEDhY1IwAB4HI+9H7OxZvb5r3TVxqvvtpJDcRAS7SA6Z6/DwrJNhC4dBdLCcqMY65BXaFxriVJR2tjMJpX7sayYGAOTnaQfnjrWN2aKg8UulFzeMe50btT4n6Lu5pVtPYKE2j4e4EaF14ILfm6Vyx0pCSvQC2sAHYuZ1DT9bD3VnFDNPamXujYpXAJ5XxommLQ8U2TnCSK0VLWx1lLG70tYpIg8c0oR+pyFAx8wfmaK4w/nEpzHujLB2pnSNNXT9IjkurV4ridyqiVQSoVWGc48Sw8+lOfLzsgDNm/n0XPiw5ggcZN3X+eqc0/THGr2l/EAUaeTdHjJjAVgD9/uKVi5bYWHTYrRgcOGyiVvaPRbWoR75jC8TzbRsyEDDGDzXOAO4XYsVRWB7JaDPYySzGCSOYT7QXUDEQySfnitpm+X2WLmdu/wC6ytUle5klQ94IxwSfrTM50tJLG60ELT1/2yESqrxSvtaLONpzgc+WcZo2NzOASJJMjD2LqX9jo+G7eckttVeyXvAHnBzTPaHN0DVmPJscuskh/PBNj2R09QIiLh5GwVMsyjjGegHxpZxE7k1vJmDZwvz/AGXAa3qKy6xPNGwdM713KM/P6UyEZaBVYkhzSRxSqosU4WK6hyV3ZD4A58/Otpyk6rijnGtBT2n3KpEz+9w5mB3hk56+efSqytIBtG18zHOpp1Wzpeo2cka2ykMyfhRpjc0m7HQfGs8jLNgro4aZoYIy0/NNX2oabpryaXcRi8TvmfshtMJIxsRgOMc5PPPGOKW55Gye3Dsddj6qLVUuYTJpEkt8qjJtyoS4QfynhviK2wY17dHGwuXjeR4nguYMp9PJDt3S7U9kJAysVZXG1l+IIzXRZiGSaNOq4EvJ8sWrhp1pxTNDbzw7GZJCGI8N3h+v61eTW0POOyFh1CFIUCYYbXHG3Oc+PFMs8Uh0bXe6oMbGPf0UdSelTMNkJicBZCTur62tVIuLiMY8M8/ShfMxg6RRRYaWX3GpQ6qLi2lmswNsUnZ5ZcknGcgeVYpccPgC62H5HcbL3bcEsl0XvLtYHkm4xHv/ADYK5PpWCeSR7Req9JydhcIHvaLa/wCEeGtk3p3lOaBqinS57CdJSpmV4+7wuFIYnyHK1mkiqitTJGB/Ngk1Wp69VtW2s3cDuLwxyruIbDAZ586UYGnZaPaMp1TenXkE95PcXlzFDui7ONS2eCQevy+9BJEWtAATGTNdqVqBkQp7vqJijCtns2XcxJznPl8qVG98dlo3VzQsmAs7KjmJ5Va4vmnwvJkZSxPHj5cVJHvl1cihiZFo1WLW7SPKbkDdwArjpS60TbCIk1tEjCOcd4eLjyxVZT1K1871WSY3c8aQmRIpWXtCcbsZ6eldeHDPewOXnsVylDDKYydexK6fI8cxZgqqjLvGe94E06PDPBBvZZZ+U4ywto6hfQLz2n095bRIZJF7knJjPBIOKSYn3a2+1RaC1e59ptON3bSC6XCxAOAp64P9aW2J/UnOxMQqyvj8oa6kGZ03uQANm0L9/T7082ue0gm0h2rDutLyODx/lQ2jNq4lJOO1bP8AKatDquugRfZhUNxM51W5iDKdv/Co3gPNz5+HNATey0xt/m3Qre5btERI5lXd3nIzn5Z/1mlhhJW0vLGuNaN0PYg6k99aSrIICY/zRhZMNt8CSOnPhmjDNLVPxBifkI1+i1NX1B59H0C63tNc3ruXuOQ4CnaV68+AJ8cUTHOaSAdlndFHiHMBHvJU+8KY+yldgxwFdj58c1o559kXsFij5KhcyKQj33ltdxpHltbuCESyzh+eVWY8gnwOfD4VBO8kC0UvI8Mcckle64N27UjcyTG3uZkeQCBI5DGHJDd7n9qAyvIq03F8nw4TEOY1o6NeoB+qrd3nvUVna53QxI271BYsftkVccY1cVnx+LzOqPQa+v5Scsb25tbG8t9NEcdvd47UZxuC8j9+ablC53POopS8Emn3UM4twBGFK97jPBzxSRq2l2JmmKQkcQNu71QL2cXcayjEXZABnyeQwHB+lRwzCylOqMxtB0LVmJaWJbPvsYz5rQ0itvWmIrPTBgvqUeNwDAR848ceFAc3BG3m+JRZbXRv7nUu6OivDg/Ymhp/EJxMPByotrpZPOop/wCyTUp3UoHRcXp23sNCaAGbWIEc8lfdycfPNJdzt6BaWyYetXD1RI9P9nw4I1e2fHJUWjZbB+NRpkDgS31QyugcxzWvAJ7EvqNzdvarcw7Y7VpjGrHO7gAnjFdN+IJNN0C81DgQxoc/UpK4vwLVIbQNtyS7FcZ4oXSiqajjwpz5pfBMW811JAJYLnEZB4I8jVAuIsJrgxppwVJnvgjZmBUnnip01LiJspV7C3gnkjLOXj/N/lzS2gEWnyh7OiiR2Omu7Kbza2Mj8FsE+X+vKppwCs5r95FisbAnm+UELnHZHn0qA9iEt/3ei6C9s4L7Q9HuzLu93ke3dyhLHneM+OcE/Sq79EwAktLTeqhI4e2Ze0I2yEg7OvNUDRC6MshdFiBXvOB7ukDR+SW1K709Y5LeS4mmOzH4KDg+WWxVGy2ghxM0UmIe88QB5LV0aKwvNL9nLW6u2gH4rAFO8RvfOPt8vhQDd35wRwS5A1zBZ1r5H0S08az3y2kTbXEpQMVwVU87ypOcZz1xT2Rvkjc9vAIonBohio9BxcPXyTNraXs1vNYXWxhBLh7p+FBPIBIzj49KyiYAh3YjkaXxPjO7nA2s4zWtvFfQdokgMJU7Myb/AIMoI+pFXzt8EWNi56Z0jtL+gASOkzol6IhGzxsoO3HfOSQBx+laonEtK4ONga2Rum66qx0xdQV/ddOvm7MhX7xXBPgc/wChQnFNHFWOTT/KfNA9odD1KHSQWgVA8hJVmB2oDwT4jr9qTHM1zyAurNGTh3OdQdsO5ZftpoFjodlEbS+a4kkADoy4xjqfh0rQHZmkrlzMLHsaTsuIGSB4UAKsgIsZTcN+fDjNWhrRWAjxjaceZNUroIkawndxk4yMt0qXSuk+gtlkiVbfO3GMEZP/AO0JJTWtGiddIbe7gaC37RmkJYMoz48delLzEhPLQ0grV1a1tj7NtGkDxsj9oC2PzHaPP1NSMuLtVWIDGxkjguXmsQQxiZvEAE9K0hui5pkIcRWgTa6Je2sEYZSvaBiu2QAVTaApMkY/Nao9heA7CJyTyBu5qWK3VGNwNELdvbcPLcE9l3znhHAP+HFOZGQxZ5prlJ+yyINHuL2dkhNujRpvbtmKAKD5lfUUh5y6rVE3nNGodtZtvkXtLTCEjcHJB+Bwf0pjWlwsJD3tY8grpNL7CHSb2zuJozvKTQcE/iKcYxtHVWPPpRugdwUix8TXU7h+d9rLvJhbMxdwpkcsuQeftSntMdWuk3Gx4mKdrPicHbdtpPTdNhu17S71aytFXPdfczsfQAY+ZNKLgl82Voa1p8XuNhHpF+l5JZQ4Xsu6SS7MSOeoz0oQNSSnElmQsOoRfZ+a1MnvWpLKbrfH+Zwd4B72cnA6feiDnMvLxWt00TiC0d/eV0N57ZQ3FncQSWZAIMaqmMHHRuvpWfmzwQGRoXz66tZHvXktgEgLZVWcAjPUcGmhulFC6bPVpuylS0uInklZrsyJgqTwuMZ3eefpT4qaCFzMWDIQ7iF0th7SXtjqBmmuprgIxGwy5Djx46ZPnS3QRubRC0e0SMeHA6cbUajrk+qypJeOGCLwiDAHAzgetHFCyNuiCbEySSdLw/N1h6q91q7STszSYAAPeP7VbngBVzBc9p7Nd1lJprbT2iMW9M/0peYJvs56k3b6c0gCGBlUMOSjknr5LQufSYyDgR8022npIQrWU4xwN0Rw3zzSxJ2pzoQdA1Kto7dof9klSNRknut+9FzgCWMPZ2Ttvp0Rt8IJ2kGMk24O3n1NKdIb3WuOBmXZTDZLFcIzxTu5JAxDjH0NUJOChhaBZC0NTfdpEa5HduGzgc9F8K1Vquc51hY0e4ygbM8j0pjTqFlkaDbl2ksalbb/AHm4q43Z3beOnpShuVtcNBQXpFthJCJMBuzHIJOevrQ9yZuBeiyVxmRVhgKZwC3dJ+tdZjXZdl5eaRnOGnE+qFdxxSLj3e1C9GzcYyD1pckRcKACdBimtOtrH1LT5YPxLSa2mAGTGHUuo8P5qyuwz2iwugzlCN5yu+Wiz4tTmjb8WVVx1VlJqmzSMROwUEg6u0flIeo6il12YB/LQySmSrRYbDtw90btLJOvg4FLWrMiifw3kcdQSM1aq1InA8TUU1VveQB1NWhVTeEHgFvhV2gKsLpj3hHjPnRApZBV0mncgHz8Ku0BaTstjTrg2xftbYusg4DcfOrLgEcUZy0StK3Uz2ckQsIuq7TIqZXg+LY+xzWeaxqt2GANN376SEVvJG7yxJAg6Z91QD6ml51pEJ3A9AmtPtp+2Ika3BblOFz5+A/egc4VsjYxwJuvRaEqaiCpRo0JzgvAoP1Bq4wCShxBcGhWke67eJZ7uOJsZIRGx6jihmAB2UwxtuhUzXKKJEmuWLZx/eAH7Ckkdi1hw60narHLcErdzsx/gDsM/PPFGNeCWewpK8k4ZMMT2xLKD0P83jxW1ulLkyg6k9aRVg84HZZ5/K75yKPRJNgGtQulEtqOyIkmDqTwUyBx4c0IBtNJbV3qtMMJ2QRRoVVBzgfoxzVaDh8ldFwux6/dZErNKWRSMHzBNdZpJC8tI1jXaJNrQxgkyLjx3Rvj9KWWu3taGOZxCz9R1dIB2KwRSEjqvGPLjNZzPS2DBZhZ0XOzrNdSmScyM3gcVncXONlbmc1EMrTSHLa9kAXDjcONy4zQkEbpjXhx0NqqwruwwOPPFUiTMFnJI6JHFJl1LIAh7w8xUUTi6LfbQzWrIh43SMqj7mmGJ4FkJbZY3uyNdr+eCft/Za7eFpZAqgdBuUk/UjFTm31YHqEPOx2Qb8jXnVLNuLV7WVo5I2DKeQME/Hg9OaC60TAyxY2V7e3E7xqjJuL4O8gDHHiTz8qYxpdskSuybrZi0SbttqzAHdwUglbH+GjdGW6lUyVryAEzcWNwJYYw88z4IJaOTK+uMZpTBnflC0SkRR5yuhkdU3FRcqMbSAkku846jKHaPSl4nnLy0n4LmiM5O/5w0XOXrhGG2ORH3ZKtbyYXw6cCs2o3HqugXNO3yKe06TasjxxupIK/7khi3hgkYFSyFZDXhEe5nEYSewmJ6lzIpODx4g4pzZC46n0/ZYpIGsFhpB7z91nyhrS4VrSO6dcguEMZH3xUe/Lo0qRRF4t4vyTk1/ePMqwIWiaMHDOoAOOQQSPtmkjESVq9ajhYb0jCzdP1Aw3pMtvbxSk4LiCTn5/vRCybLktxAoBvFWuvdmuDcSMyruxuV1IzWmNo0tc+d25ZuSgpNH2wFvL2hY9Jeyx/WnCgdPWllItvT9LtaszOwAlSCP8A8qAs36UwC93DyCQ4ke7G895P1KNbGIv/AH5wPI8U1rBwcPzwWeSVwPTY7wP2KhpFVsO5U+pwfvWsO01XJdEbofJL3V7arDIGWOUBcn8QEj1rNO9lUfoujgopbJFeINfT5rBtzp0kroLQFeu+STAz5eFKZzOoDVpkGKaMxf5D+6beKxRSPdLXP8JjJJ+ZDYH2q6YDQVXI5nSKM0NvJbo8hWJweD265HwXGMfGqfRUittgfVZepW1kyO8c47QDgb+D8sfas8gFaLfESDRCPEkE1tpUkSTpvVxIkMhcrGHIJOfD6D6Ult5itTw3IDSZtbdIbt5Ns5hJOyRYh5eJNPaw1R2WYzgG26LXe40+TT2SW5SORudodgSfrUOEi3zIRjpgayfT7rlpYN2opb2xeRZTwqTjI8z0xQiLpBoRyYp3NlzhVdd/3T1jo7m/FtJcp+FiR3gwWU+XOKfFD0yL2WTEYkGFrq3XXR2UKyNJ7zdRMMks824AfDccfStL4G1QcQscOKcHe6D4LFVPeNVktY7hYFQENdxs2Z84wOpGRzWaCF3OEB5W7EYoCAZoh9lv3VrDJGO1u8qmO9vfnHXPOPLyq8ThCOmH0O1XyfykHkRiPMexY1zZTkn3WZnbP5uxmcEepxWIYVztQb8D9l1HcpMZoWhp/qb91KW2pKGX3W2YlSFeSLAHTzOemRTBhZgaDL8B9Ul/KWFcOlLR7zXovQwX0MORaxQvg5RIwVzn0bn6U0Q4hp0bXksftmBc3WTXvdSmOW5WciWMgDO1tkhHz4x96W8Yi6ynwAP0T4ZMJl/iNv8AqI+qreKtw7dp22PNYSM/MVRiLhRDv+0Ixi2MPRcz/wAh/dZ8FqYrrfDHMVxjdLk4+xzQGCQbNPknDHQEdKRoP9aWkguu1dRFcEHoFTA+9OEUn8p8lifioL99vmgmwuiwPu9z18QmKL2eS9iljHYeqzBaiS3capujtkxnANsOPjhcVQiderSiOLiI0e35p21v3D5dniYDBMagA0fsxPw+qQOUQz467gPulff7bOGcFh1/DNbhNH1jyXFdhZuN+KtFeWrk9m2W6nCE4HnxQumjHUmNwc7tr80e2uYWyVt5wAfzbcZ+AohIOAVHD0ek71Xr26jRu17CUIp29p0LdOowcVlDumS7ddJ0Y5oBhsDzXPXbi6vDJHcxxJjrJw36Z/as8hN6FbocgaAWnzWRcTuzSK8jsvPO/wAfUUokrS0MGoC15RLHNZWVq5gjWACOZRj3gP3ifTk9D5ULADqSmTEig0I9iiYa0kuHViTuLKqDP8xb/Wa0tyFmp+SxObPn6Ibfaf2TLWqQd6JmZQPQ/uaIOh6ys724sbhqVupw9yo7HtZSMZdiBj4YqF0fwstUxk5vNIB3UmtFjt5r8AWohMabpO2i2K7Z42854psIt+g08krEOIjALrd38F1MQnKZjEYzwDlmB/xc1r4LnBYFlI8Os3UMaiRpvxJAWMYVumehpEZcJCAFpnDDCHOdt2LWM99HJiK2ULx3lmyP/jxRSnEE9Fvrp8leF9ia2pH7/wC0/MFQ76g8aE3UkS55/C3n7f0pUYxJ959f8T9k+WTAD3Ige3OB6XY8lDQXDkt/aU+D4LAAPuCac2GZ3+afKlmkxeFZvhmn/kD8lVba4CbDds58yuD9iKL2ef8A1T5JBx2EP/TDz/ZAktbwLiK+Zef4o933JojFP/qeiWMVgviw/kSgzQ6kHBhvowgUDbJDk58STxQiPFD/ADB5JhxPJrtOYI7ioQ6qJV3XFq6eIWMqR+tVlxPWETZeTrFNcPEIcqao0pIuIAp6YBFBzeJvVyMz8n1o30UKNRU9+RGHoQP+miDZwdUt02DIoWPD91dmkI71shPo4/pTOlxb8lmJbu1/56qNx/8ADEfMVY0+FAdfiUMkZAHVemDUIBVBzhqo90twjL2MZDdeOtLMMbuC0Mxk7NnLy2sKnBhyg6KspFCYjWgTWYphd0j6Kb+S/mC9lFEibcGPcDnHmT/Ss3NSAkkLoe1wOAAdr+cFz1yjSzsz20keF/7BAb4cAVneBd0V0InOr4fD8KWaIrA0kSbpN+OzMGT8etCW7EJjJXCw/cbLQ1hZNQS2uJYy1y0StNGqNsA6AbvPGOPChZGeARzYlgolws77JJFe3ucRWEhUYyVyv6rTWiQbBZHuw7j/AIjh+eK0kltjH+Lp0ytj87zMfsBTA2U+8UgvwrTTGgqtsou74LE4ChT3UfvAemcDI+dEGFx95C+VrBfNj88UzpTJYXjO0ksoc7SWlBK/PGD9qdC3ISbWXFyGQBpblpdDJHc3kRdCdmMEHjP1p7mPfsVlZNFH7yz9Ps9Vgml3XCIp/KM7h+2KqKKdu7kM+KwTx0GarVDXSRqffYAR+bcmc+Xjx96NzZrsPHl+6qKTCEaxuJ7Hf/KVlur1WG67syP/AE8f9VTPK0avb+eKIxYZ+0Ug/P6UNdQJYiQpIVP91jn4cnmlnHtj/iV4f3TByK+c/wCDY77/APUJca/aFin4gcdVI5+1QcoxO2BKH9BxLdXEBQ+qoWUC3uH3eIj/AMqp2OaNchRR8jSnTnGjvKDc6yYZNiWV1KCOWjiyB6ZoRjw4e4U13IT2n+I1CGtzM6qumXe08EshXFT2snTIVP0oMF883zCme+mWQLHaSHyPe/pS/aXHZvzTDgoxvMCPBSs2ozDG0Q+piz+9Na+Y7CvBZXxYNmpN+P7K6x3wPfu0YeXY4/emZZeLvRIMmF4Rnz/ZSyzlv+IAHkEqBr+J9EBdEdmequEXB4oqS85VQgB4JFDSdnJKMoIYZdz8TVa9al9issnaMMqo+ApjdNkmV1nalAcreQwjhXPPnWeaZ8YsFdPC4WGYDM35pa/vJ4bh40YYBPUZrMMbKt7uSMKBYHqh3F1cmGEpcPGxQ5ZAMnvEeI/SiGIlfu5IdhMPGRlYPX7pZ45Z5VE15cuMdC+P0FMGY7kpMhbG6mtCNaadbzTFZBI3HjI39acIW8VnfiJG+78gpnt4LF828SjPdbd3sj51OZYNgibiJHakomkxKL64hOWTZuAbnBz4UrDinFq0YyuabIBRK07lFUFMZx4nrVy6oIehVcVzOmubrUpIJeEjyRt7pPxI61liFvXQmkJbloeQXQRQK0DR5YAjBIY7seWeta34KKXV1+a5sHK+Iw4LGAV3fZA/sGxICFH2k78bvGrHJsA11Vu5fxhNaeSK2m2oiMYQgZ28MR8+PGr/AEyDfXzU/X8aRVjyQ/7OSNAI57lRnp2pOPrV8wGkBpI8Vmdj3v8Afa0+Co1u8Z3i7uTjwLjH6UuZjgNHlOw08ZfrE0+H7rD1W9u4dQCRXMqqecA1zhLIPiK9CMJhngHmx5ImlaheTTyrLOzBRxkDy+FOGIlyE5ks8m4V0obk61MWtXZLg9mdvTu0xuKk1tYpeTMOKAseKZj1Oduqx/Q/1pzMQ5yyu5Ni6z+eCI17Kf4UHypvOuWWTCsYaFqqXUjnBx9KoPJKB8TW7L//2Q=="
          ></PlaceCard>
          <PlaceCard
            city="Rome"
            image="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
          ></PlaceCard>
          <PlaceCard
            city="Hyderabad"
            image="data:image/jpeg;base64,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"
          ></PlaceCard>
          <PlaceCard
            city="Paris"
            image="https://images.unsplash.com/photo-1551634979-2b11f8c946fe?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
          ></PlaceCard>
          <PlaceCard
            city="Kerala"
            image="data:image/jpeg;base64,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"
          ></PlaceCard>
          <PlaceCard
            city="Jaipur"
            image="data:image/jpeg;base64,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"
          ></PlaceCard>
        </div>
      </div>
      <div className="landing-page-footer">
        <div className="landing-page-menu">
          <h1>Ai Planner</h1>
          <div className="landing-page-links-container2">
            <div className="landing-page-container1">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link04"
              >
                Tour packages
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link05"
              >
                Personalized offers
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link06"
              >
                Special deals
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link07"
              >
                Summer holiday
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </a>
            </div>
            <div className="landing-page-container2">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link08"
              >
                About us
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link09"
              >
                FAQ
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link10"
              >
                Terms and conditions
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link11"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="landing-page-follow-container1">
            <span className="landing-page-text16">
              Follow us on
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <div className="landing-page-icons-container1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link12"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="landing-page-icon11"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link13"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="landing-page-icon13"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link14"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="landing-page-icon15"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
