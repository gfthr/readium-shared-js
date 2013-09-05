//  LauncherOSX
//
//  Created by Boris Schneiderman.
//  Copyright (c) 2012-2013 The Readium Foundation.
//
//  The Readium SDK is free software: you can redistribute it and/or modify
//  it under the terms of the GNU General Public License as published by
//  the Free Software Foundation, either version 3 of the License, or
//  (at your option) any later version.
//
//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU General Public License for more details.
//
//  You should have received a copy of the GNU General Public License

ReadiumSDK.Views.MediaOverlayElementHighlighter = function() {

    var _highlightedElement = undefined;
    var BACK_COLOR = "#99CCCC";

    this.highlightElement = function(element) {

        if(element === _highlightedElement) {
            return;
        }

        this.reset();


        //$(element).addClass("media-overlay-highlight");
        _highlightedElement = element;
        //this is temporary should be changed to applying css with MO highlight class to iframe content
        $(_highlightedElement).css("background", BACK_COLOR);
    };

    this.reset = function() {

        if(_highlightedElement) {
//            $(_highlightedElement).removeClass("media-overlay-highlight");
            $(_highlightedElement).css("background", '');
            _highlightedElement = undefined;
        }
    }

};