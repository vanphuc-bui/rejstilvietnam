# Affiliate analytics

RejsTilVietnam tracks clicks on links marked with `rel="sponsored"` or `data-affiliate-provider`.

The browser pushes an `affiliate_click` event to `window.dataLayer` for future analytics integrations and sends the same aggregate event to the first-party endpoint:

`POST /api/affiliate-click`

The Cloudflare Worker writes the event to the Workers Analytics Engine dataset `affiliate_clicks`.

## Privacy

The custom dataset deliberately does **not** store IP address, cookie ID, user ID, full affiliate URL or user-agent.

Stored columns:

- `blob1`: page path
- `blob2`: provider
- `blob3`: destination
- `blob4`: placement
- `blob5`: target host
- `blob6`: visible link text
- `double1`: 1 click
- `index1`: `rejstilvietnam.dk`

Cloudflare Analytics Engine uses `_sample_interval` when aggregating sampled data, so use `SUM(_sample_interval)` for click counts.

## Useful SQL queries

### Top pages producing affiliate clicks, last 30 days

```sql
SELECT
  blob1 AS page,
  SUM(_sample_interval) AS clicks
FROM affiliate_clicks
WHERE timestamp > NOW() - INTERVAL '30' DAY
GROUP BY page
ORDER BY clicks DESC
LIMIT 50
```

### Providers and destinations

```sql
SELECT
  blob2 AS provider,
  blob3 AS destination,
  SUM(_sample_interval) AS clicks
FROM affiliate_clicks
WHERE timestamp > NOW() - INTERVAL '30' DAY
GROUP BY provider, destination
ORDER BY clicks DESC
```

### Which CTA placement converts to the most outbound clicks

```sql
SELECT
  blob4 AS placement,
  blob2 AS provider,
  SUM(_sample_interval) AS clicks
FROM affiliate_clicks
WHERE timestamp > NOW() - INTERVAL '30' DAY
GROUP BY placement, provider
ORDER BY clicks DESC
```

This measures outbound affiliate clicks, not confirmed bookings or commission. Provider dashboards remain the source of truth for sales and revenue.
