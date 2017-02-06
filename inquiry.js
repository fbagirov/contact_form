{\rtf1\ansi\ansicpg1252\cocoartf1504\cocoasubrtf810
{\fonttbl\f0\fswiss\fcharset0 ArialMT;}
{\colortbl;\red255\green255\blue255;\red45\green45\blue45;\red255\green255\blue255;}
{\*\expandedcolortbl;;\cssrgb\c23137\c23137\c23137;\cssrgb\c100000\c100000\c100000;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl280\partightenfactor0

\f0\fs24 \cf2 \cb3 \expnd0\expndtw0\kerning0
function inquiryValidation()\
\{\
var name1 = document.registration.fname;\
var name2 = document.registration.lname;\
var addy = document.registration.address;\
var mnum = document.registration.Mnumber;\
var mailat = document.registration.email;\
\
\'a0if(fname_validation(name1))\
\{\
if(lname_validation(name2))\
\{\
if(alphanumeric(addy))\
\{\'a0\
if(nums(mnum))\
\{\
if(ValidateEmail(mailat))\
\{\
if(validsex(umsex,ufsex))\
\{\
\}\
\}\'a0\
\}\
\}\'a0\
\}\
\}\
return false;\
\} function fname_validation(name1)\
\{\
var name1_len = name1.value.length;\
if (name1_len == 0 )\
\{\
alert("Please enter your first name");\
name1.focus();\
return false;\
\}\
return true;\
\}\
function lname_validation(name2)\
\{\
var name2_len = name2.value.length;\
if (name2_len == 0 )\
\{\
alert("Please enter your last name");\
name2.focus();\
return false;\
\}\
return true;\
\}\
function alphanumeric(addy)\
\{\'a0\
var letters = /^[0-9a-zA-Z]+$/;\
if(addy.value.match(letters))\
\{\
return true;\
\}\
else\
\{\
alert('Please enter your company or organization name\'92);\
addy.focus();\
return false;\
\}\
\}\
function nums(mnum)\
\{\'a0\
var digits = /^[0-9]+$/;\
if(mnum.value.match(digits))\
\{\
return true;\
\}\
else\
\{\
alert('Please enter your Mobile number');\
mnum.focus();\
return false;\
\}\
\}\
function ValidateEmail(mailat)\
\{\
var mailformat = /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w\{2,3\})+$/;\
if(mailat.value.match(mailformat))\
\{\
return true;\
\}\
else\
\{\
alert("Please enter a valid email address");\
return false;\
\}\
\
\
\}}