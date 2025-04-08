export async function POST(req) {
  const body = await req.json();

  const token = process.env.FB_ACCESS_TOKEN;
  const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

  const fbUrl = `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${token}`;

  const payload = {
    data: [
      {
        event_name: body.eventName || "Lead",
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        event_source_url: body.url || "samuelamaro.com",
        event_id: body.userData?.event_id || undefined,
        user_data: {
          client_user_agent: req.headers.get("user-agent"),
          ...body.userData,
        },
        custom_data: body.customData || {},
      },
    ],
  };

  const res = await fetch(fbUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();
  console.log("🔥 Evento recebido:", body);

  return Response.json(result);
}
