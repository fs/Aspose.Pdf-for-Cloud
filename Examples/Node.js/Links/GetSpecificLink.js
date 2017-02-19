// ExStart:1
var fs = require('fs');
var assert = require('assert');
var PdfApi = require('asposepdfcloud');
var StorageApi = require('asposestoragecloud');
var configProps = require('../config/config.json');
var data_path = '../../../Data/';

var AppSID = configProps.app_sid;
var AppKey = configProps.api_key;
var outFolder = configProps.out_folder;
var config = {'appSid':AppSID,'apiKey':AppKey , 'debug' : true};

// Instantiate Aspose Storage API SDK
var storageApi = new StorageApi(config);
// Instantiate Aspose.Pdf API SDK
var pdfApi = new PdfApi(config);

// Set input file name
var name = "Sample-Bookmark.pdf";
var pageNumber = 1;
var linkIndex = 1;

try {
// Upload source file to aspose cloud storage
storageApi.PutCreate(name, null, null, data_path + name , function(responseMessage) {

	assert.equal(responseMessage.status, 'OK');

	// Invoke Aspose.Pdf Cloud SDK API to get a specific link from a PDF page
	pdfApi.GetPageLinkAnnotationByIndex(name, pageNumber, linkIndex, null, null, function(responseMessage) {
			assert.equal(responseMessage.status, 'OK');
			var linkAnnotation = responseMessage.body.Link;
			console.log("Action Type :: " + linkAnnotation.ActionType);
			console.log("Action :: " + linkAnnotation.Action);
			});
	});

}catch (e) {
  console.log("exception in example");
  console.log(e);
}
//ExEnd:1