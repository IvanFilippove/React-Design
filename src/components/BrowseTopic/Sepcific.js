import React from "react";
import { IoIosArrowDropdownCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { Button, Tabs, Modal, Row, Col, Container, ListGroup, Tab, Nav } from 'react-bootstrap';
import TRENDING from './../../assets/resource/items/trending.svg';
import './browseTopic.scss';
export default class Sepcific extends React.Component {
  render() {
    return (
        <div className="series" id="specific">
          <div className="trending-topic">
            <div className="btn-content">
              <button>
                <img src={TRENDING} className="icon" /><span>TRENDING TOPICS</span>
              </button>
            </div>
            <div className="top-list">
              <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                  <div className="content">
                    <p className="content-title">TOP 10</p>
                    <div className="content-items">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <ul>
                          <li>
                            <button>1</button>
                            <span>Easter</span>
                          </li>
                          <li>
                            <button>2</button>
                            <span>Resurrection</span>
                          </li>
                          <li>
                            <button>3</button>
                            <span>Grace</span>
                          </li>
                          <li>
                            <button>4</button>
                            <span>Sin</span>
                          </li>
                          <li>
                            <button>5</button>
                            <span>Good Friday</span>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <ul>
                          <li>
                            <button>6</button>
                            <span>The Purposes of God</span>
                          </li>
                          <li>
                            <button>7</button>
                            <span>The Deach of Christ</span>
                          </li>
                          <li>
                            <button>8</button>
                            <span>Glorification</span>
                          </li>
                          <li>
                            <button>9</button>
                            <span>Salavation</span>
                          </li>
                          <li>
                            <button>10</button>
                            <span>Final Ressurrection</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 content-2">
                <p className="content-title">OTHERS</p>
                <div className="content-items">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 other-content">
                    <ul>
                      <li>Bible Prophecy</li>
                      <li>Regeneration & New Birth</li>
                      <li>Sancitifcation</li>
                      <li>Justification</li>
                      <li>The Kingdom of God</li>
                      <li>Suffering</li>
                      <li>Endurance</li>
                      <li>Courge & Boldness</li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <ul>
                        <li>Fear & Anxiety</li>
                        <li>Baptism</li>
                        <li>Communion/Lord`s Supper</li>
                        <li>Envanglism</li>
                        <li>Wedding</li>
                        <li>Funeral</li>
                        <li>Timothy</li>
                        <li>First-person Narrative</li>
                      </ul>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <div className="main-container">
            <div className="btn-content">
              <button className="series-btn">SERMON SERIES</button>
              <button className="sermon-btn">SERMONS</button>
            </div>
            <div className="blog-container">
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="item">
                  <p className="blue-title">APOLOGETICS</p>
                  <ul>
                    <li>
                      Agnosticism/Atheism
                    </li>
                    <li>
                      Apostasy
                    </li>
                    <li>
                      Cults & The Occult
                    </li>
                    <li>
                      Empty Religion
                    </li>
                    <li>
                      Evidence for the Faith
                    </li>
                    <li>
                        The Exclusivity of Christ
                    </li>
                    <li>
                      The Problem of Evil
                    </li>
                    <li>
                      World Religions
                    </li>
                  </ul>
                </div>
                <div className="item">
                  <p className="blue-title">
                    ETHICS & CULTURAL ISSUE
                  </p>
                  <ul>
                    <li>Abortion</li>
                    <li>Homosexuality</li>
                    <li>Politics</li>
                    <li>Poverty</li>
                    <li>Orphans & Windows</li>
                    <li>Race & Ethnicity</li>
                    <li>Refugees</li>
                    <li>Religious Liberty</li>
                    <li>Slavery & Human Trafficking</li>
                    <li>War</li>
                    <li>Worldview</li>
                  </ul>
                </div>
                <div className="item">
                  <p className="blue-title">
                    GOD
                  </p>
                  <ul>
                    <li>The Faithfulness of God</li>
                    <li>The Foreknowledge of God</li>
                    <li>The Godness of God</li>
                    <li>The Glory of God</li>
                    <li>The Grace & Mercy of God</li>
                    <li>The Holiness of God</li>
                    <li>The Love of God</li>
                    <li>The Omniscience of God</li>
                    <li>The Power of God</li>
                    <li>The Purposes of God</li>
                    <li>The Sovereignty of God</li>
                    <li>The Sufficiency of God</li>
                    <li>The Trinity</li>
                    <li>The Wisdom of God</li>
                    <li>The Wrath of God</li>
                  </ul>
                </div>
                <div className="item">
                  <p className="blue-title">
                    HOLY SPIRIT
                  </p>
                  <ul>
                    <li>Filling/Indwelling of the Holy</li>
                    <li>Spirit</li>
                    <li>Ministry of the Holy Spirit</li>
                    <li>Spiritual Gifts</li>
                  </ul>
                </div>
                <div className="item">
                  <p className="blue-title">
                    JESUS CHRIST
                  </p>
                  <ul>
                    <li>The Eternal Pre-Existence of Christ</li>
                    <li>The Birth of Christ</li>
                    <li>The Death of Christ</li>
                    <li>The Ministry of Christ</li>
                    <li>The Miracles of Christ</li>
                    <li>The Teaching of Christ</li>
                    <li>The person & Identity of Christ</li>
                    <li>Prophecies Concerning Jesus Christ</li>
                    <li>The Resurrection of Christ</li>
                    <li>The SUfficiency of Christ</li>
                  </ul>
                </div>
                <div className="item">
                  <p className="blue-title">
                    SALVATION
                  </p>
                  <ul>
                    <li>Adoption</li>
                    <li>Assurance of Salvation</li>
                    <li>Arminianism/Calvinism</li>
                    <li>Atonement</li>
                    <li>Faith</li>
                    <li>Forgiveness (Divine)</li>
                    <li>The Gospel</li>
                    <li>Justification</li>
                    <li>Sanctification</li>
                    <li>Glorification</li>
                    <li>Perseverance of the Saints</li>
                    <li>Election/Predestination</li>
                    <li>Regeneration & New Birth</li>
                    <li>Repentance</li>
                    <li>Salavation</li>
                    <li>Works (Evidence of Salvation)</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="item">
                  <p className="blue-title">
                    SCRIPTURE
                  </p>
                  <ul>
                    <li>Biblical Incerrancy/Reliability</li>
                    <li>God`s Promises</li>
                    <li>How to Study the Bible</li>
                    <li>Sound Doctrine</li>
                    <li>The Value and Authority of the Bible</li>
                    <li>Truth</li>
                    <li>The Old Testament Law</li>
                  </ul>
                </div>
                <div className="item">
                  <p className="blue-title">
                    ESCHATOLOGY & ETERNITY
                  </p>
                  <ul>
                    <li>Final Judgment</li>
                    <li>Final Resurrection</li>
                    <li>Eternal Life</li>
                    <li>Heaven</li>
                    <li>Israel</li>
                    <li>Millennium</li>
                    <li>Rapture</li>
                    <li>Second Coming of Christ</li>
                    <li>Tribulation</li>
                  </ul>
                </div>
                <div className="item">
                  <p className="blue-title">
                    FAMILY
                  </p>
                  <ul>
                    <li>Children</li>
                    <li>Divorce & Remarriage</li>
                    <li>Family Worship</li>
                    <li>Husbands & Fathers</li>
                    <li>Marriage</li>
                    <li>Men</li>
                    <li>Parenting</li>
                    <li>Singleness & Dating</li>
                    <li>Wives & Mothers</li>
                    <li>Women</li>
                  </ul>
                </div>
                <div className="item">
                  <p className="blue-title">
                    LIFE ISSUE
                  </p>
                  <ul>
                    <li>Conscience</li>
                    <li>Death & Dying</li>
                    <li>Decision Making/Knowing God`s</li>
                    <li>Will</li>
                    <li>Depression</li>
                    <li>Diet & Exercise</li>
                    <li>Disease & Sickness</li>
                    <li>Discouragement</li>
                    <li>Entertainment</li>
                    <li>Friendship</li>
                    <li>Grief</li>
                    <li>Investing</li>
                    <li>Loneliness</li>
                    <li>Money/Finances</li>
                    <li>Retirement</li>
                    <li>Speech</li>
                    <li>Suffering</li>
                    <li>Waiting</li>
                    <li>Work & Vocation</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="item">
                  <p className="blue-title">
                    SPIRITUAL GROWTH/ SPIRITUAL DISCIPLINES/ VIRTURES
                  </p>
                  <ul>
                    <li>Accountability</li>
                    <li>Battling Sin</li>
                    <li>Commitment</li>
                    <li>Correction</li>
                    <li>Courage & Boldness</li>
                    <li>Dependence upon God</li>
                    <li>Encouragement</li>
                    <li>Endurance</li>
                    <li>Faithfulness</li>
                    <li>Fasting</li>
                    <li>Forgiveness (hhuman)</li>
                    <li>Gentleness</li>
                    <li>Giving</li>
                    <li>Gratitude</li>
                    <li>Hope</li>
                    <li>Hospitality</li>
                    <li>Humility</li>
                    <li>Identity in Christ</li>
                    <li>Joy</li>
                    <li>Knowing God</li>
                    <li>Lordship & Obedience</li>
                    <li>Love</li>
                    <li>Ministry Usefulness</li>
                    <li>Peacefulness</li>
                    <li>Persecerance</li>
                    <li>Prayer</li>
                    <li>Purity</li>
                    <li>Pursiot of Holiness</li>
                    <li>Rememvering</li>
                    <li>Sacrifice</li>
                    <li>Service</li>
                    <li>Single-Mindedness</li>
                    <li>Strength</li>
                    <li>Trust</li>
                    <li>Wisdom</li>
                    <li>Worship & Adoration</li>
                  </ul>
                </div>
                <div className="item">
                  <p className="blue-title">
                    SIN: TEMPTATION
                  </p>
                  <ul>
                    <li>Anger</li>
                    <li>Apathy</li>
                    <li>False Teaching</li>
                    <li>Fear & Anxiety</li>
                    <li>Hypocrisy</li>
                    <li>Legalism</li>
                    <li>Materialism</li>
                    <li>People-pleasing</li>
                    <li>Pornography</li>
                    <li>Pride</li>
                    <li>Sexual Immorality</li>
                    <li>Suicide</li>
                    <li>Worldliness</li>
                  </ul>
                </div>
                <div className="item">
                  <p className="blue-title">
                    SIN: THEOLOGY
                  </p>
                  <ul>
                    <li>The Fall</li>
                    <li>Guilt</li>
                    <li>Imputed & Original Sin</li>
                    <li>The Nature of Sin</li>
                    <li>Shame</li>
                    <li>Sinful Nature</li>
                  </ul>
                </div>
                <div className="item">
                  <p className="blue-title">
                    SPIRITUAL WORLD
                  </p>
                  <ul>
                    <li>Angels</li>
                    <li>Demons</li>
                    <li>Satan</li>
                    <li>Spiritual Warfare</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="item">
                  <p className="blue-title">
                    CHURCH LIFE
                  </p>
                  <ul>
                    <li>Baptism</li>
                    <li>Christian Unity/Conflict</li>
                    <li>Resolution</li>
                    <li>THe Church</li>
                    <li>Church Discipline</li>
                    <li>Church Membership</li>
                    <li>Communication/Lord`s Supper</li>
                    <li>Corporate Worship</li>
                    <li>Discipleship</li>
                    <li>Disciple-making</li>
                    <li>Equipping/Leadership</li>
                    <li>Development</li>
                    <li>Fellowship</li>
                    <li>Preaching</li>
                    <li>Sabbath/Lord`s Day</li>
                  </ul>
                </div>
                <div className="item">
                  <p className="blue-title">
                    CHURCH LEADERSHIP
                  </p>
                  <ul>
                    <li>Elders</li>
                    <li>Deacons</li>
                    <li>Pastoring/Shepherding</li>
                  </ul>
                </div>
                <div className="item">
                  <p className="blue-title">
                    OUTREACH
                  </p>
                  <ul>
                    <li>Church Planting</li>
                    <li>Evangelism</li>
                    <li>Physical Needs and Missions</li>
                    <li>World Missions</li>
                  </ul>
                </div>
                <div className="item">
                  <p className="blue-title">
                    SPECIAL EVENTS/ HOLIDAYS
                  </p>
                  <ul>
                    <li>Wedding</li>
                    <li>Funeral</li>
                    <li>Christmas</li>
                    <li>Maundy Thursday</li>
                    <li>Good Friday</li>
                    <li>Easter</li>
                    <li>Thanksgiving</li>
                    <li>Mother`s Day</li>
                    <li>Father`s Day</li>
                    <li>Memorial Day/Veteran`s Day</li>
                    <li>Halloween</li>
                  </ul>
                </div>
                <div className="item">
                  <p className="blue-title">
                    TRAGEDIES
                  </p>
                  <ul>
                    <li>Crime</li>
                    <li>Death of Children</li>
                    <li>Persecution</li>
                    <li>Terrorism</li>
                  </ul>
                </div>
                <div className="item">
                  <p className="blue-title">
                    BIBLICAL CHARACTERS
                  </p>
                  <ul>
                    <li>Onesiphorus</li>
                    <li>Timothy</li>
                  </ul>
                </div>
                <div className="item">
                  <p className="blue-title">
                    SERMON STYLE
                  </p>
                  <ul>
                    <li>First-Person Narrative</li>
                    <li>Book Overview</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}