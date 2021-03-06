/*
*
* This file is part of xVideoServiceThief,
* an open-source cross-platform Video service download
*
* Copyright (C) 2007 - 2009 Xesc & Technology
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with xVideoServiceThief. If not, see <http://www.gnu.org/licenses/>.
*
* Contact e-mail: Xesc <xeskuu.xvst@gmail.com>
* Program URL   : http://xviservicethief.sourceforge.net/
*
*/

function RegistVideoService()
{
	this.version = "1.0.0";
	this.minVersion = "2.0.0a";
	this.author = "Xesc & Technology 2009";
	this.website = "http://demoscene.tv/";
	this.ID = "demoscene.tv";
	this.caption = "Demoscene";
	this.adultContent = false;
	this.musicSite = false;
}

function getVideoInformation(url)
{
	// video information
	var result = new VideoDefinition();
	// download webpage
	var http = new Http();
	var html = http.downloadWebpage(url);
	// get video title
	result.title = copyBetween(html, "var prodCaption = '", "'");
	result.title = copyBetween(result.title, "<strong>", "</strong>");
	// get video url
	result.URL = copyBetween(html, "javascript:showFlashPlayer('", "'");
	// return the video information
	return result;
}

function getVideoServiceIcon()
{
	return new Array(
		0x89,0x50,0x4e,0x47,0x0d,0x0a,0x1a,0x0a,0x00,0x00,0x00,0x0d,0x49,0x48,0x44,0x52,
		0x00,0x00,0x00,0x10,0x00,0x00,0x00,0x10,0x08,0x00,0x00,0x00,0x00,0x3a,0x98,0xa0,
		0xbd,0x00,0x00,0x00,0x09,0x70,0x48,0x59,0x73,0x00,0x00,0x0b,0x13,0x00,0x00,0x0b,
		0x13,0x01,0x00,0x9a,0x9c,0x18,0x00,0x00,0x00,0x02,0x74,0x52,0x4e,0x53,0x00,0x00,
		0x76,0x93,0xcd,0x38,0x00,0x00,0x00,0x95,0x49,0x44,0x41,0x54,0x18,0x19,0x65,0xc1,
		0x11,0xa2,0xc4,0x30,0x00,0x45,0xd1,0xb7,0xbe,0x8b,0x17,0x47,0x8b,0x83,0xdd,0x42,
		0xb1,0x18,0xac,0x06,0x07,0x07,0xab,0xc1,0x60,0xb1,0x5a,0x0c,0x46,0xff,0xf7,0x39,
		0x27,0xf9,0x35,0xc7,0xd5,0xdb,0xd9,0xdb,0x78,0xc6,0x4c,0x32,0xde,0xeb,0xb6,0x9f,
		0x57,0xcb,0xbb,0x55,0x5c,0x46,0x32,0x67,0x6a,0xbf,0xd7,0x67,0xfb,0x9c,0x60,0xcf,
		0x18,0xce,0x75,0x7b,0xe8,0x47,0x69,0xc8,0x37,0x2d,0xde,0xfb,0x7b,0xba,0xd6,0x86,
		0x58,0x53,0xe7,0xbd,0xe3,0xf5,0x62,0x59,0x04,0x4b,0xca,0xb1,0x2f,0x82,0x08,0x42,
		0x49,0x11,0x11,0x41,0xc4,0x92,0x43,0x10,0x11,0x11,0x8e,0x7c,0x44,0x04,0x41,0xa4,
		0xe6,0x14,0x44,0x44,0xc4,0x6f,0x2e,0x44,0x10,0x41,0xe8,0x19,0x0b,0x22,0x82,0xe0,
		0x6b,0x24,0x99,0xf7,0xd5,0xce,0x7f,0xad,0x3f,0x33,0xbf,0xfe,0x00,0x23,0x00,0x67,
		0xef,0x40,0x30,0xb2,0x89,0x00,0x00,0x00,0x00,0x49,0x45,0x4e,0x44,0xae,0x42,0x60,
		0x82);
}
