import StudioEditor from "@grapesjs/studio-sdk/react";

import "@grapesjs/studio-sdk/style";

export default function App() {
  return (
    <div style={{ width: "100%", height: "100dvh" }}>
      <StudioEditor
        options={{
          licenseKey: '683662e5f0cf4c53b7b0b2c7c2dc7f670b1292f9a8e044e08b77805aafd0b6cc',
          project: {
            type: "web",
            // TODO: replace with a unique id for your projects. e.g. an uuid
            id: "eca5055a-c7a5-461e-bca7-66c247fb1229",
          },
          identity: {
            // TODO: replace with a unique id for your end users. e.g. an uuid
            id: "efe2aee5-e683-4bf1-b27a-a086d5f9d28a",
          },
          assets: {
            storageType: "cloud",
          },
          storage: {
            type: "cloud",
            autosaveChanges: 100,
            autosaveIntervalMs: 10000,
          },
          plugin: (editor:any) => {
            editor.Blocks.add('custom-text-block', {
              label: 'Custom Text',
              content: '<div class="custom-text">Hello from custom block!</div>',
              category: 'Custom',
            });
      
            editor.DomComponents.addType('custom-text', {
              model: {
                defaults: {
                  tagName: 'div',
                  classes: ['custom-text'],
                  content: 'Editable Custom Text',
                  attributes: { 'data-custom': 'yes' },
                },
              },
            });
          }
        }}
      />
    </div>
  );
}
