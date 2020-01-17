// @flow

import express from 'express';
// import { GraphQLClient } from 'graphql-request';

// import { publicUrl, apiUrl } from '../../config';

// import createIndexHtml from './createIndexHtml';

// const client = new GraphQLClient(apiUrl);

const router = new express.Router();

// router.get('/ci/:clientProfileInvitationToken', async (req, res, next) => {
//   try {
//     const { clientProfileInvitationToken } = req.params;

//     const response = await client.request(
//       `
//         query TemplateQuery($clientProfileInvitationToken: String) {
//           clientProfileInvitation(token: $clientProfileInvitationToken) {
//             name
//             image { url }
//             description
//           }
//         }
//       `,
//       {
//         clientProfileInvitationToken,
//       },
//     );

//     const { clientProfileInvitation } = response;
//     if (!clientProfileInvitation) {
//       next();
//       return;
//     }

//     const newHtml = createIndexHtml({
//       title: clientProfileInvitation.name,
//       url: `${publicUrl}ci/${clientProfileInvitationToken}`,
//       image: clientProfileInvitation.image.url,
//       description: clientProfileInvitation.description,
//     });

//     res.send(newHtml);
//   } catch (error) {
//     next();
//   }
// });

// router.get('/dashboard/templates/view/:templateId', async (req, res, next) => {
//   try {
//     const { templateId } = req.params;

//     const response = await client.request(
//       `
//         query TemplateQuery($templateId: ID) {
//           template(id: $templateId) {
//             name
//             image { url }
//             description
//           }
//         }
//       `,
//       {
//         templateId,
//       },
//     );

//     const { template } = response;
//     if (!template) {
//       next();
//       return;
//     }

//     const newHtml = createIndexHtml({
//       title: template.name,
//       url: `${publicUrl}dashboard/templates/view/${templateId}`,
//       image: template.image.url,
//       description: template.description,
//     });

//     res.send(newHtml);
//   } catch (error) {
//     next();
//   }
// });

export default router;
