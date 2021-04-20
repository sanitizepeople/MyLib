FilePond.registerPlugin(FilePondPluginImagePreview, FilePondPluginImageResize, FilePondPluginFileEncode);

FilePond.setOptions({
  stylePanelAspectRatio: 150 / 100,
  imageResigeTargetWidth: 100,
  imageResigeTargetHeight: 150,
});
FilePond.parse(document.body);
