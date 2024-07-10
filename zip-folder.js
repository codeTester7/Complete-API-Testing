const fs = require('fs');
const archiver = require('archiver');

function zipFolder(sourceFolder, zipFilePath) {
  return new Promise((resolve, reject) => {
    const output = fs.createWriteStream(zipFilePath);
    const archive = archiver('zip', {
      zlib: { level: 9 } // Sets the compression level.
    });

    output.on('close', () => {
      console.log(`Successfully zipped folder ${sourceFolder} to ${zipFilePath}`);
      resolve(zipFilePath);
    })

    archive.on('error', (err) => {
      reject(err);
    });

    archive.directory(sourceFolder, false);
    archive.pipe(output);
    archive.finalize();
  });
}

const sourceFolder = 'reports'; // Replace with your folder path
const zipFilePath = './report.zip'; // Replace with desired zip file path

zipFolder(sourceFolder, zipFilePath)
  .then(() => console.log('Folder zipped successfully'))
  .catch(err => console.error('Error zipping folder:', err));
