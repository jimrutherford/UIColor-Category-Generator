function getDocumentPath()
{

  var fileUrl = doc.fileURL();
  var filePath = fileUrl.path();

  var targetFolder = filePath.split(doc.displayName())[0];
  log ("Document Path = " + targetFolder);

  return targetFolder;

}

function saveFile(filename, content)
{
    var path = [@"" stringByAppendingString:filename];
    var str = [@"" stringByAppendingString:content];

    if (in_sandbox()) {
        sandboxAccess.accessFilePath_withBlock_persistPermission(getDocumentPath(), function(){
            [str writeToFile:path atomically:true encoding:NSUTF8StringEncoding error:null];
        }, true)
    } else {
        [str writeToFile:path atomically:true encoding:NSUTF8StringEncoding error:null];
    }
}

function makeNiceName(str)
{
    var result;

    // make title case
    result = str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1);});

    // strip spaces from layer names
    result = result.replace(/ /g,'');

    // get rid of special characters
    result = result.replace(/[^\w\s]/gi, '');

    return result;
}

function getSwatchLayers()
{
  var pages = [doc pages];

  var swatchPage;

  for (var i=0; i < [pages count]; i++)
  {
    if (pages[i].name() == "Color Swatch")
    {
      swatchPage = pages[i];
      break;
    }
  }

  return [swatchPage layers];
}
