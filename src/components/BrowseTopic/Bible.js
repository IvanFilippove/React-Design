import React from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Button, Accordion, Card } from 'react-bootstrap';
import './browseTopic.scss';
export default class Bible extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: false,
        }
    }
  render() {
    return (
        <div className="row bible-content">
          <div className="col-12 col-sm-12 col-md-7 col-xl-7">
              <p className="blue-title">OLD TESTAMENT BOOKS</p>
              <div className="bible-item-content">
                <div className="col-6 col-sm-6 col-md-6 col-xl-6 no-padding-left-right">
                  <ul className="bible-item-lists">
                    <li>Gensis</li>
                    <li>Exodus</li>
                    <li>Leviticus</li>
                    <li>Numbers</li>
                    <li>Deuteronomy</li>
                    <li>Joshua</li>
                    <li>Judges</li>
                    <li>Ruth</li>
                    <li>1 Samuel</li>
                    <li>2 Samuel</li>
                    <li>1 Kings</li>
                    <li>2 Kings</li>
                    <li>1 Chronicles</li>
                    <li>2 Chronicles</li>
                    <li>Ezra</li>
                    <li>Nehemiah</li>
                    <li>Esther</li>
                    <li>Job</li>
                    <li>Psalms</li>
                    <li>Proverbs</li>
                  </ul>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-xl-6 no-padding-left-right">
                  <ul className="bible-item-lists">
                    <li>Ecclesiastes</li>
                    <li>The Song of Solomon</li>
                    <li>Isaiah</li>
                    <li>Jeremiah</li>
                    <li>Lamentations</li>
                    <li>Ezekiel</li>
                    <li>Daniel</li>
                    <li>Hosea</li>
                    <li>Joel</li>
                    <li>Amos</li>
                    <li>Obadiah</li>
                    <li>Jonah</li>
                    <li>Micah</li>
                    <li>Nahum</li>
                    <li>Habakkuk</li>
                    <li>Zephaniah</li>
                    <li>Haggai</li>
                    <li>Zechariah</li>
                    <li>Malachi</li>
                  </ul>
                </div>
              </div>
          </div>
          <div className="col-12 col-sm-12 col-md-5 col-xl-5">
            <p className="blue-title">NEW TESTAMENT</p>
            <div className="bible-item-content">
              <div className="col-6 col-sm-6 col-md-6 col-xl-6 no-padding-left-right">
                <ul className="bible-item-lists">
                  <li>Matthew</li>
                  <li>Mark</li>
                  <li>Luke</li>
                  <li>John</li>
                  <li>Acts</li>
                  <li>Romans</li>
                  <li>1 Corinthians</li>
                  <li>2 Corinthians</li>
                  <li>Galatians</li>
                  <li>Ephesians</li>
                  <li>Philippians</li>
                  <li>Colossians</li>
                  <li>1 Thessalonians</li>
                  <li>2 Thessalonians</li>
                </ul>
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-xl-6 no-padding-left-right">
                <ul className="bible-item-lists">
                  <li>1 Timothy</li>
                  <li>2 Timothy</li>
                  <li>Titus</li>
                  <li>Philemon</li>
                  <li>Hebrews</li>
                  <li>James</li>
                  <li>1 Peter</li>
                  <li>2 Peter</li>
                  <li>1 John</li>
                  <li>2 John</li>
                  <li>3 John</li>
                  <li>Jude</li>
                  <li>Revelation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    )
  }
}