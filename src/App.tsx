import StudioEditor from "@grapesjs/studio-sdk/react";

import "@grapesjs/studio-sdk/style";

export default function App() {
  return (
    <div style={{ width: "100%", height: "100dvh" }}>
      <StudioEditor
        options={{
          licenseKey: "095a8e56c51d47b0bcc10d7518b8da60d85a833368f5475d99141a2d3ca284b3",
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
        }}
      />
    </div>
  );
}
