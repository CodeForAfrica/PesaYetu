import { useState, useEffect } from 'react';

export default function useStories(url) {
  const urlJson = `https://corsio.devops.codeforafrica.org/?${url}?format=json`;
  const [reports, setReports] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(urlJson);
      const jsonClean = await (await response.text()).replace(
        '])}while(1);</x>',
        ''
      );
      const json = await JSON.parse(jsonClean);
      const reportStreamItems = await json.payload.streamItems;
      const reportItems = [];
      await reportStreamItems.forEach(function extractReports(
        reportStreamItem
      ) {
        reportItems.push(
          json.payload.references.Post[reportStreamItem.postPreview.postId]
        );
      });
      setReports(reportItems);
    }
    fetchData();
  }, [url, urlJson]);

  return [reports];
}
