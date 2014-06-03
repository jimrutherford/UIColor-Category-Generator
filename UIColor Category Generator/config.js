var newLine = "\n";

var commentHeader;

var mPrefix;
var hPrefix;

commentHeader  = "//  " + newLine;
commentHeader += "//  UIColor+Styles.m" + newLine;
commentHeader += "//  " + newLine;
commentHeader += "//  " + newLine;
commentHeader += "//  Created by Sketch UIColor Category Generator Plugin" + newLine;
commentHeader += "//  (https://github.com/jimrutherford/UIColor-Category-Generator)" + newLine;
commentHeader += "//  " + newLine;
commentHeader += "//  " + newLine;
commentHeader += newLine;
commentHeader += newLine;

mPrefix  = "#import \"UIColor+Sketch.h\"";
mPrefix += newLine;
mPrefix += newLine;
mPrefix += "@implementation UIColor (Sketch)";
mPrefix += newLine;
mPrefix += newLine;

hPrefix  = "#import <UIKit/UIKit.h>";
hPrefix += newLine;
hPrefix += newLine;
hPrefix += "@interface UIColor (Sketch)";
hPrefix += newLine;
hPrefix += newLine;

var end = "@end"
