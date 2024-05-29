export default function Accessibility() {
  return (
    <>
      <script
        src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
        crossOrigin="anonymous"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
nl_pos = "bl";
nl_dir = "assets/nl-files/";
nl_contact = "n:Doron Hadad|p:050-4741117|u:h.d.law9+d:gmail.com‬|f:1533-5506545";
`,
        }}
      />
      <script src="plugins/nagishli.js?v=2.3" defer></script>
    </>
  );
}
