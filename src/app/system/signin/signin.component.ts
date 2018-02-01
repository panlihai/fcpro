import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styles: [`
  .logo-txt {
    background-color: transparent !important;
}
.sigin-wrap {
    width: 100%;
    height: 100%;
    background-color: #373d41;
    position: absolute;
}

.sigin {
    background-color: #1F2325;
    background-image: url(assets/img/login_bg.jpg);
    background-size: cover;
}

.navbar-brand>img {
    position: absolute;
    top: 0;
    left: 0;
}

.sigin-body {
    padding: 74px 0 118px;
    text-align: center;
}

.sigin-body .sigin-error {
    width: 100%;
    background: #FEEEEB;
    border: 1px solid #F15532;
    color: #F15533;
    margin-bottom: 16px;
    line-height: 24px;
    box-sizing: border-box;
    font-size: 14px;
    padding: 5px 12px 5px 32px;
    text-align: left;
}

.sigin-body .sigin-body-box {
    width: 990px;
    margin: auto;
    position: relative;
    height: 388px;
}

.sigin-body .sigin-body-box .sigin-body-txt-box {
    text-align: left;
    position: absolute;
    left: 0;
    top: 0;
    color: #ffffff;
}

.sigin-body .sigin-body-box .sigin-body-txt-box .start-button {
    margin-top: 20px;
}

.sigin-body .sigin-body-box .sigin-body-txt-box .start-button .start-button-last {
    margin-left: 20px;
}

.sigin-body .sigin-body-box .sigin-module {
    width: 380px;
    height: 380px;
    padding: 20px;
    background: #ffffff;
    position: absolute;
    right: 0;
}

.sigin-body .sigin-body-box .sigin-form .form-group {
    margin-bottom: 20px;
}

.sigin-body .sigin-body-box .sigin-form .sigin-submit {
    margin-top: 40px;
    border-radius: 0;
}

.sigin-body .sigin-body-box .sigin-other {
    width: 100%;
    text-align: right;
    margin-top: 10px;
}

.sigin-body .sigin-body-box .sigin-other .sigin-other-link {
    font-size: 12px;
    color: #9B9EA0;
    margin-left: 15px;
}

.sigin-body .sigin-body-box .sigin-other .sigin-other-link:hover {
    color: #108ee9;
}

.fc-copyright {
    padding: 20px;
}

.fc-copyright .fc-copyright-in {
    width: 100%;
    max-width: 1200px;
    color: #73777a;
    font-size: 14px;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
}

.fc-copyright .fc-copyright-in .big a {
    font-size: 16px;
    color: #9b9ea0;
    margin-right: 35px;
}

.fc-copyright .fc-copyright-in .big a:hover {
    color: #108ee9;
}

.fc-copyright .fc-copyright-in .link-wrap {
    padding-top: 32px;
}

.fc-copyright .fc-copyright-in .link-wrap .link-item {
    display: inline-block;
    font-size: 14px;
    color: #73777a;
    margin-right: 10px;
    margin-top: 10px;
}

.fc-copyright .fc-copyright-in .link-wrap .link-item:hover {
    color: #108ee9;
}

.fc-copyright .fc-copyright-in .copyright {
    color: #73777a;
    font-size: 14px;
    margin-top: 10px;
}
  `]
})
export class SigninComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
