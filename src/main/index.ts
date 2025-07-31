import { ipcMain } from 'electron';

ipcMain.on('QwQNTTemplate.greeting', () => {
  alert('Main');
});

qwqnt.main.hooks.whenBrowserWindowCreated.peek(window => {
  console.log('A window has just been created');
  console.log(window);
});

export const onLoad = (self: PluginSelf) => {
  console.log('Loaded', self);
};