(this["webpackJsonpnew-blog"]=this["webpackJsonpnew-blog"]||[]).push([[0],{48:function(e,n,t){},59:function(e,n,t){"use strict";t.r(n);var E=t(0),i=t.n(E),o=t(38),r=t.n(o),a=(t(48),t(9)),c=t(16),A=t(5),T=t(2);function u(){var e=Object(A.f)();return Object(T.jsx)("div",{children:Object(T.jsxs)("h3",{children:["No match for ",Object(T.jsx)("code",{children:e.pathname})]})})}t(55);var s,N,d,R,I,O,l,D,_,C,S,f,L,P,U,b,v,M,m,p,g,h,V,j,B,G,x,F,y,H,w,W,Y,k,Q,K,q,$,z,J,X,Z,ee,ne,te,Ee,ie,oe,re,ae,ce,Ae,Te,ue,se,Ne,de,Re,Ie,Oe,le,De,_e,Ce,Se,fe,Le,Pe,Ue,be,ve,Me,me,pe,ge,he,Ve,je,Be,Ge,xe,Fe,ye,He,we,We,Ye,ke,Qe,Ke,qe,$e,ze,Je,Xe,Ze,en,nn,tn,En,on,rn,an,cn,An,Tn,un,sn,Nn,dn,Rn,In,On,ln,Dn,_n,Cn,Sn,fn,Ln,Pn,Un,bn,vn,Mn,mn,pn,gn,hn,Vn,jn,Bn,Gn,xn,Fn,yn,Hn,wn,Wn,Yn,kn,Qn,Kn,qn,$n,zn,Jn,Xn,Zn,et,nt,tt,Et,it,ot=t(6),rt=t(7),at={caesarOffset:4,encryptedToken:"kltcRpokQ[xi\\tSjj}6TEt8GtG~{{oG9hz7]UO~P",user:"YeungKC",repository:"YeungKC.github.io",perpage:10,orderBy:"CREATED_AT",postCategoryId:"DIC_kwDOF8LZSc4B-xAD",labelsCount:64},ct=t(61),At=t(22),Tt=t.n(At),ut=t(28),st=function(e,n){return e.split("").map((function(e){return String.fromCharCode(e.charCodeAt(0)+n)})).join("")},Nt=st(at.encryptedToken,-at.caesarOffset),dt=function(e,n){return Object(ut.a)(Tt.a.mark((function t(){var E,i,o,r;return Tt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.github.com/graphql",{method:"POST",headers:{Authorization:"bearer ".concat(Nt)},body:JSON.stringify({query:e,variables:n})});case 2:return E=t.sent,t.next=5,E.json();case 5:if(!(i=t.sent).errors){t.next=9;break}throw o=i.errors[0]||"Error..",r=o.message,new Error(r);case 9:return t.abrupt("return",i.data);case 10:case"end":return t.stop()}}),t)})))};!function(e){e.CreatedAt="CREATED_AT"}(s||(s={})),function(e){e.Failure="FAILURE",e.Notice="NOTICE",e.Warning="WARNING"}(N||(N={})),function(e){e.ActionRequired="ACTION_REQUIRED",e.Cancelled="CANCELLED",e.Failure="FAILURE",e.Neutral="NEUTRAL",e.Skipped="SKIPPED",e.Stale="STALE",e.StartupFailure="STARTUP_FAILURE",e.Success="SUCCESS",e.TimedOut="TIMED_OUT"}(d||(d={})),function(e){e.All="ALL",e.Latest="LATEST"}(R||(R={})),function(e){e.Completed="COMPLETED",e.InProgress="IN_PROGRESS",e.Pending="PENDING",e.Queued="QUEUED",e.Requested="REQUESTED",e.Waiting="WAITING"}(I||(I={})),function(e){e.All="ALL",e.Direct="DIRECT",e.Outside="OUTSIDE"}(O||(O={})),function(e){e.Collaborator="COLLABORATOR",e.Contributor="CONTRIBUTOR",e.FirstTimer="FIRST_TIMER",e.FirstTimeContributor="FIRST_TIME_CONTRIBUTOR",e.Mannequin="MANNEQUIN",e.Member="MEMBER",e.None="NONE",e.Owner="OWNER"}(l||(l={})),function(e){e.Archived="ARCHIVED",e.Denied="DENIED",e.InsufficientAccess="INSUFFICIENT_ACCESS",e.Locked="LOCKED",e.LoginRequired="LOGIN_REQUIRED",e.Maintenance="MAINTENANCE",e.VerifiedEmailRequired="VERIFIED_EMAIL_REQUIRED"}(D||(D={})),function(e){e.CommitCount="COMMIT_COUNT",e.OccurredAt="OCCURRED_AT"}(_||(_={})),function(e){e.FirstQuartile="FIRST_QUARTILE",e.FourthQuartile="FOURTH_QUARTILE",e.None="NONE",e.SecondQuartile="SECOND_QUARTILE",e.ThirdQuartile="THIRD_QUARTILE"}(C||(C={})),function(e){e.Admin="ADMIN",e.None="NONE",e.Read="READ",e.Write="WRITE"}(S||(S={})),function(e){e.CreatedAt="CREATED_AT"}(f||(f={})),function(e){e.RequiredReviewers="REQUIRED_REVIEWERS",e.WaitTimer="WAIT_TIMER"}(L||(L={})),function(e){e.Approved="APPROVED",e.Rejected="REJECTED"}(P||(P={})),function(e){e.Abandoned="ABANDONED",e.Active="ACTIVE",e.Destroyed="DESTROYED",e.Error="ERROR",e.Failure="FAILURE",e.Inactive="INACTIVE",e.InProgress="IN_PROGRESS",e.Pending="PENDING",e.Queued="QUEUED",e.Waiting="WAITING"}(U||(U={})),function(e){e.Error="ERROR",e.Failure="FAILURE",e.Inactive="INACTIVE",e.InProgress="IN_PROGRESS",e.Pending="PENDING",e.Queued="QUEUED",e.Success="SUCCESS",e.Waiting="WAITING"}(b||(b={})),function(e){e.Left="LEFT",e.Right="RIGHT"}(v||(v={})),function(e){e.CreatedAt="CREATED_AT",e.UpdatedAt="UPDATED_AT"}(M||(M={})),function(e){e.CreatedAt="CREATED_AT"}(m||(m={})),function(e){e.BillingManager="BILLING_MANAGER",e.Owner="OWNER"}(p||(p={})),function(e){e.Admin="ADMIN",e.None="NONE",e.NoPolicy="NO_POLICY",e.Read="READ",e.Write="WRITE"}(g||(g={})),function(e){e.Disabled="DISABLED",e.Enabled="ENABLED",e.NoPolicy="NO_POLICY"}(h||(h={})),function(e){e.Enabled="ENABLED",e.NoPolicy="NO_POLICY"}(V||(V={})),function(e){e.CreatedAt="CREATED_AT",e.Login="LOGIN"}(j||(j={})),function(e){e.All="ALL",e.Disabled="DISABLED",e.NoPolicy="NO_POLICY",e.Private="PRIVATE",e.Public="PUBLIC"}(B||(B={})),function(e){e.Disabled="DISABLED",e.Enabled="ENABLED"}(G||(G={})),function(e){e.CreatedAt="CREATED_AT",e.CustomerName="CUSTOMER_NAME",e.HostName="HOST_NAME"}(x||(x={})),function(e){e.Email="EMAIL"}(F||(F={})),function(e){e.Login="LOGIN",e.RemoteCreatedAt="REMOTE_CREATED_AT"}(y||(y={})),function(e){e.CreatedAt="CREATED_AT"}(H||(H={})),function(e){e.Failure="FAILURE",e.Pending="PENDING",e.Success="SUCCESS"}(w||(w={})),function(e){e.Member="MEMBER",e.Owner="OWNER"}(W||(W={})),function(e){e.Cloud="CLOUD",e.Server="SERVER"}(Y||(Y={})),function(e){e.Dismissed="DISMISSED",e.Unviewed="UNVIEWED",e.Viewed="VIEWED"}(k||(k={})),function(e){e.CommunityBridge="COMMUNITY_BRIDGE",e.Custom="CUSTOM",e.Github="GITHUB",e.Issuehunt="ISSUEHUNT",e.KoFi="KO_FI",e.Liberapay="LIBERAPAY",e.OpenCollective="OPEN_COLLECTIVE",e.Otechie="OTECHIE",e.Patreon="PATREON",e.Tidelift="TIDELIFT"}(Q||(Q={})),function(e){e.CreatedAt="CREATED_AT",e.PushedAt="PUSHED_AT",e.UpdatedAt="UPDATED_AT"}(K||(K={})),function(e){e.All="ALL",e.Public="PUBLIC",e.Secret="SECRET"}(q||(q={})),function(e){e.BadCert="BAD_CERT",e.BadEmail="BAD_EMAIL",e.ExpiredKey="EXPIRED_KEY",e.GpgverifyError="GPGVERIFY_ERROR",e.GpgverifyUnavailable="GPGVERIFY_UNAVAILABLE",e.Invalid="INVALID",e.MalformedSig="MALFORMED_SIG",e.NotSigningKey="NOT_SIGNING_KEY",e.NoUser="NO_USER",e.OcspError="OCSP_ERROR",e.OcspPending="OCSP_PENDING",e.OcspRevoked="OCSP_REVOKED",e.UnknownKey="UNKNOWN_KEY",e.UnknownSigType="UNKNOWN_SIG_TYPE",e.Unsigned="UNSIGNED",e.UnverifiedEmail="UNVERIFIED_EMAIL",e.Valid="VALID"}($||($={})),function(e){e.Configured="CONFIGURED",e.Enforced="ENFORCED",e.Unconfigured="UNCONFIGURED"}(z||(z={})),function(e){e.Disabled="DISABLED",e.Enabled="ENABLED"}(J||(J={})),function(e){e.AllowListValue="ALLOW_LIST_VALUE",e.CreatedAt="CREATED_AT"}(X||(X={})),function(e){e.Disabled="DISABLED",e.Enabled="ENABLED"}(Z||(Z={})),function(e){e.UpdatedAt="UPDATED_AT"}(ee||(ee={})),function(e){e.Comments="COMMENTS",e.CreatedAt="CREATED_AT",e.UpdatedAt="UPDATED_AT"}(ne||(ne={})),function(e){e.Closed="CLOSED",e.Open="OPEN"}(te||(te={})),function(e){e.AddedToProjectEvent="ADDED_TO_PROJECT_EVENT",e.AssignedEvent="ASSIGNED_EVENT",e.ClosedEvent="CLOSED_EVENT",e.CommentDeletedEvent="COMMENT_DELETED_EVENT",e.ConnectedEvent="CONNECTED_EVENT",e.ConvertedNoteToIssueEvent="CONVERTED_NOTE_TO_ISSUE_EVENT",e.CrossReferencedEvent="CROSS_REFERENCED_EVENT",e.DemilestonedEvent="DEMILESTONED_EVENT",e.DisconnectedEvent="DISCONNECTED_EVENT",e.IssueComment="ISSUE_COMMENT",e.LabeledEvent="LABELED_EVENT",e.LockedEvent="LOCKED_EVENT",e.MarkedAsDuplicateEvent="MARKED_AS_DUPLICATE_EVENT",e.MentionedEvent="MENTIONED_EVENT",e.MilestonedEvent="MILESTONED_EVENT",e.MovedColumnsInProjectEvent="MOVED_COLUMNS_IN_PROJECT_EVENT",e.PinnedEvent="PINNED_EVENT",e.ReferencedEvent="REFERENCED_EVENT",e.RemovedFromProjectEvent="REMOVED_FROM_PROJECT_EVENT",e.RenamedTitleEvent="RENAMED_TITLE_EVENT",e.ReopenedEvent="REOPENED_EVENT",e.SubscribedEvent="SUBSCRIBED_EVENT",e.TransferredEvent="TRANSFERRED_EVENT",e.UnassignedEvent="UNASSIGNED_EVENT",e.UnlabeledEvent="UNLABELED_EVENT",e.UnlockedEvent="UNLOCKED_EVENT",e.UnmarkedAsDuplicateEvent="UNMARKED_AS_DUPLICATE_EVENT",e.UnpinnedEvent="UNPINNED_EVENT",e.UnsubscribedEvent="UNSUBSCRIBED_EVENT",e.UserBlockedEvent="USER_BLOCKED_EVENT"}(Ee||(Ee={})),function(e){e.CreatedAt="CREATED_AT",e.Name="NAME"}(ie||(ie={})),function(e){e.Size="SIZE"}(oe||(oe={})),function(e){e.OffTopic="OFF_TOPIC",e.Resolved="RESOLVED",e.Spam="SPAM",e.TooHeated="TOO_HEATED"}(re||(re={})),function(e){e.Behind="BEHIND",e.Blocked="BLOCKED",e.Clean="CLEAN",e.Dirty="DIRTY",e.Draft="DRAFT",e.HasHooks="HAS_HOOKS",e.Unknown="UNKNOWN",e.Unstable="UNSTABLE"}(ae||(ae={})),function(e){e.Conflicting="CONFLICTING",e.Mergeable="MERGEABLE",e.Unknown="UNKNOWN"}(ce||(ce={})),function(e){e.CreatedAt="CREATED_AT",e.DueDate="DUE_DATE",e.Number="NUMBER",e.UpdatedAt="UPDATED_AT"}(Ae||(Ae={})),function(e){e.Closed="CLOSED",e.Open="OPEN"}(Te||(Te={})),function(e){e.Disabled="DISABLED",e.Enabled="ENABLED"}(ue||(ue={})),function(e){e.Active="ACTIVE",e.PendingDeletion="PENDING_DELETION",e.Suspended="SUSPENDED"}(se||(se={})),function(e){e.Access="ACCESS",e.Authentication="AUTHENTICATION",e.Create="CREATE",e.Modify="MODIFY",e.Remove="REMOVE",e.Restore="RESTORE",e.Transfer="TRANSFER"}(Ne||(Ne={})),function(e){e.Asc="ASC",e.Desc="DESC"}(de||(de={})),function(e){e.Admin="ADMIN",e.Read="READ"}(Re||(Re={})),function(e){e.Business="BUSINESS",e.BusinessPlus="BUSINESS_PLUS",e.Free="FREE",e.TieredPerSeat="TIERED_PER_SEAT",e.Unlimited="UNLIMITED"}(Ie||(Ie={})),function(e){e.SamlExternalIdentityMissing="SAML_EXTERNAL_IDENTITY_MISSING",e.SamlSsoEnforcementRequiresExternalIdentity="SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY",e.TwoFactorRequirementNonCompliance="TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE"}(Oe||(Oe={})),function(e){e.Admin="ADMIN",e.BillingManager="BILLING_MANAGER",e.DirectMember="DIRECT_MEMBER",e.OutsideCollaborator="OUTSIDE_COLLABORATOR",e.Unaffiliated="UNAFFILIATED"}(le||(le={})),function(e){e.SamlExternalIdentityMissing="SAML_EXTERNAL_IDENTITY_MISSING",e.SamlSsoEnforcementRequiresExternalIdentity="SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY",e.TwoFactorAccountRecovery="TWO_FACTOR_ACCOUNT_RECOVERY",e.TwoFactorRequirementNonCompliance="TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE",e.UserAccountDeleted="USER_ACCOUNT_DELETED"}(De||(De={})),function(e){e.BillingManager="BILLING_MANAGER",e.OutsideCollaborator="OUTSIDE_COLLABORATOR",e.Unaffiliated="UNAFFILIATED"}(_e||(_e={})),function(e){e.SamlExternalIdentityMissing="SAML_EXTERNAL_IDENTITY_MISSING",e.TwoFactorRequirementNonCompliance="TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE"}(Ce||(Ce={})),function(e){e.Admin="ADMIN",e.None="NONE",e.Read="READ",e.Write="WRITE"}(Se||(Se={})),function(e){e.Admin="ADMIN",e.Read="READ"}(fe||(fe={})),function(e){e.All="ALL",e.Internal="INTERNAL",e.None="NONE",e.Private="PRIVATE",e.PrivateInternal="PRIVATE_INTERNAL",e.Public="PUBLIC",e.PublicInternal="PUBLIC_INTERNAL",e.PublicPrivate="PUBLIC_PRIVATE"}(Le||(Le={})),function(e){e.Admin="ADMIN",e.BillingManager="BILLING_MANAGER",e.DirectMember="DIRECT_MEMBER",e.Reinstate="REINSTATE"}(Pe||(Pe={})),function(e){e.Email="EMAIL",e.User="USER"}(Ue||(Ue={})),function(e){e.Admin="ADMIN",e.Member="MEMBER"}(be||(be={})),function(e){e.All="ALL",e.Disabled="DISABLED",e.Internal="INTERNAL",e.Private="PRIVATE"}(ve||(ve={})),function(e){e.CreatedAt="CREATED_AT",e.Login="LOGIN"}(Me||(Me={})),function(e){e.CreatedAt="CREATED_AT"}(me||(me={})),function(e){e.CreatedAt="CREATED_AT"}(pe||(pe={})),function(e){e.Debian="DEBIAN",e.Docker="DOCKER",e.Maven="MAVEN",e.Npm="NPM",e.Nuget="NUGET",e.Pypi="PYPI",e.Rubygems="RUBYGEMS"}(ge||(ge={})),function(e){e.CreatedAt="CREATED_AT"}(he||(he={})),function(e){e.Gist="GIST",e.Issue="ISSUE",e.Organization="ORGANIZATION",e.Project="PROJECT",e.PullRequest="PULL_REQUEST",e.Repository="REPOSITORY",e.Team="TEAM",e.User="USER"}(Ve||(Ve={})),function(e){e.BlueMint="BLUE_MINT",e.BluePurple="BLUE_PURPLE",e.PinkBlue="PINK_BLUE",e.PurpleCoral="PURPLE_CORAL",e.RedOrange="RED_ORANGE"}(je||(je={})),function(e){e.ChevronUp="CHEVRON_UP",e.Dot="DOT",e.DotFill="DOT_FILL",e.HeartFill="HEART_FILL",e.Plus="PLUS",e.Zap="ZAP"}(Be||(Be={})),function(e){e.Archived="ARCHIVED",e.NotArchived="NOT_ARCHIVED"}(Ge||(Ge={})),function(e){e.ContentOnly="CONTENT_ONLY",e.NoteOnly="NOTE_ONLY",e.Redacted="REDACTED"}(xe||(xe={})),function(e){e.Done="DONE",e.InProgress="IN_PROGRESS",e.Todo="TODO"}(Fe||(Fe={})),function(e){e.CreatedAt="CREATED_AT",e.Name="NAME",e.UpdatedAt="UPDATED_AT"}(ye||(ye={})),function(e){e.Closed="CLOSED",e.Open="OPEN"}(He||(He={})),function(e){e.AutomatedKanbanV2="AUTOMATED_KANBAN_V2",e.AutomatedReviewsKanban="AUTOMATED_REVIEWS_KANBAN",e.BasicKanban="BASIC_KANBAN",e.BugTriage="BUG_TRIAGE"}(we||(we={})),function(e){e.Merge="MERGE",e.Rebase="REBASE",e.Squash="SQUASH"}(We||(We={})),function(e){e.CreatedAt="CREATED_AT",e.UpdatedAt="UPDATED_AT"}(Ye||(Ye={})),function(e){e.Pending="PENDING",e.Submitted="SUBMITTED"}(ke||(ke={})),function(e){e.Approved="APPROVED",e.ChangesRequested="CHANGES_REQUESTED",e.ReviewRequired="REVIEW_REQUIRED"}(Qe||(Qe={})),function(e){e.Approve="APPROVE",e.Comment="COMMENT",e.Dismiss="DISMISS",e.RequestChanges="REQUEST_CHANGES"}(Ke||(Ke={})),function(e){e.Approved="APPROVED",e.ChangesRequested="CHANGES_REQUESTED",e.Commented="COMMENTED",e.Dismissed="DISMISSED",e.Pending="PENDING"}(qe||(qe={})),function(e){e.Closed="CLOSED",e.Merged="MERGED",e.Open="OPEN"}($e||($e={})),function(e){e.AddedToProjectEvent="ADDED_TO_PROJECT_EVENT",e.AssignedEvent="ASSIGNED_EVENT",e.AutomaticBaseChangeFailedEvent="AUTOMATIC_BASE_CHANGE_FAILED_EVENT",e.AutomaticBaseChangeSucceededEvent="AUTOMATIC_BASE_CHANGE_SUCCEEDED_EVENT",e.AutoMergeDisabledEvent="AUTO_MERGE_DISABLED_EVENT",e.AutoMergeEnabledEvent="AUTO_MERGE_ENABLED_EVENT",e.AutoRebaseEnabledEvent="AUTO_REBASE_ENABLED_EVENT",e.AutoSquashEnabledEvent="AUTO_SQUASH_ENABLED_EVENT",e.BaseRefChangedEvent="BASE_REF_CHANGED_EVENT",e.BaseRefDeletedEvent="BASE_REF_DELETED_EVENT",e.BaseRefForcePushedEvent="BASE_REF_FORCE_PUSHED_EVENT",e.ClosedEvent="CLOSED_EVENT",e.CommentDeletedEvent="COMMENT_DELETED_EVENT",e.ConnectedEvent="CONNECTED_EVENT",e.ConvertedNoteToIssueEvent="CONVERTED_NOTE_TO_ISSUE_EVENT",e.ConvertToDraftEvent="CONVERT_TO_DRAFT_EVENT",e.CrossReferencedEvent="CROSS_REFERENCED_EVENT",e.DemilestonedEvent="DEMILESTONED_EVENT",e.DeployedEvent="DEPLOYED_EVENT",e.DeploymentEnvironmentChangedEvent="DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT",e.DisconnectedEvent="DISCONNECTED_EVENT",e.HeadRefDeletedEvent="HEAD_REF_DELETED_EVENT",e.HeadRefForcePushedEvent="HEAD_REF_FORCE_PUSHED_EVENT",e.HeadRefRestoredEvent="HEAD_REF_RESTORED_EVENT",e.IssueComment="ISSUE_COMMENT",e.LabeledEvent="LABELED_EVENT",e.LockedEvent="LOCKED_EVENT",e.MarkedAsDuplicateEvent="MARKED_AS_DUPLICATE_EVENT",e.MentionedEvent="MENTIONED_EVENT",e.MergedEvent="MERGED_EVENT",e.MilestonedEvent="MILESTONED_EVENT",e.MovedColumnsInProjectEvent="MOVED_COLUMNS_IN_PROJECT_EVENT",e.PinnedEvent="PINNED_EVENT",e.PullRequestCommit="PULL_REQUEST_COMMIT",e.PullRequestCommitCommentThread="PULL_REQUEST_COMMIT_COMMENT_THREAD",e.PullRequestReview="PULL_REQUEST_REVIEW",e.PullRequestReviewThread="PULL_REQUEST_REVIEW_THREAD",e.PullRequestRevisionMarker="PULL_REQUEST_REVISION_MARKER",e.ReadyForReviewEvent="READY_FOR_REVIEW_EVENT",e.ReferencedEvent="REFERENCED_EVENT",e.RemovedFromProjectEvent="REMOVED_FROM_PROJECT_EVENT",e.RenamedTitleEvent="RENAMED_TITLE_EVENT",e.ReopenedEvent="REOPENED_EVENT",e.ReviewDismissedEvent="REVIEW_DISMISSED_EVENT",e.ReviewRequestedEvent="REVIEW_REQUESTED_EVENT",e.ReviewRequestRemovedEvent="REVIEW_REQUEST_REMOVED_EVENT",e.SubscribedEvent="SUBSCRIBED_EVENT",e.TransferredEvent="TRANSFERRED_EVENT",e.UnassignedEvent="UNASSIGNED_EVENT",e.UnlabeledEvent="UNLABELED_EVENT",e.UnlockedEvent="UNLOCKED_EVENT",e.UnmarkedAsDuplicateEvent="UNMARKED_AS_DUPLICATE_EVENT",e.UnpinnedEvent="UNPINNED_EVENT",e.UnsubscribedEvent="UNSUBSCRIBED_EVENT",e.UserBlockedEvent="USER_BLOCKED_EVENT"}(ze||(ze={})),function(e){e.Closed="CLOSED",e.Open="OPEN"}(Je||(Je={})),function(e){e.Confused="CONFUSED",e.Eyes="EYES",e.Heart="HEART",e.Hooray="HOORAY",e.Laugh="LAUGH",e.Rocket="ROCKET",e.ThumbsDown="THUMBS_DOWN",e.ThumbsUp="THUMBS_UP"}(Xe||(Xe={})),function(e){e.CreatedAt="CREATED_AT"}(Ze||(Ze={})),function(e){e.Alphabetical="ALPHABETICAL",e.TagCommitDate="TAG_COMMIT_DATE"}(en||(en={})),function(e){e.CreatedAt="CREATED_AT",e.Name="NAME"}(nn||(nn={})),function(e){e.Internal="INTERNAL",e.Private="PRIVATE",e.Public="PUBLIC"}(tn||(tn={})),function(e){e.Internal="INTERNAL",e.Private="PRIVATE",e.Public="PUBLIC"}(En||(En={})),function(e){e.Internal="INTERNAL",e.Private="PRIVATE",e.Public="PUBLIC"}(on||(on={})),function(e){e.Merge="MERGE",e.Rebase="REBASE",e.Squash="SQUASH"}(rn||(rn={})),function(e){e.Internal="INTERNAL",e.Private="PRIVATE",e.Public="PUBLIC"}(an||(an={})),function(e){e.Internal="INTERNAL",e.Private="PRIVATE",e.Public="PUBLIC"}(cn||(cn={})),function(e){e.Internal="INTERNAL",e.Private="PRIVATE",e.Public="PUBLIC"}(An||(An={})),function(e){e.Abuse="ABUSE",e.Duplicate="DUPLICATE",e.OffTopic="OFF_TOPIC",e.Outdated="OUTDATED",e.Resolved="RESOLVED",e.Spam="SPAM"}(Tn||(Tn={})),function(e){e.Collaborator="COLLABORATOR",e.OrganizationMember="ORGANIZATION_MEMBER",e.Owner="OWNER"}(un||(un={})),function(e){e.Commit="COMMIT",e.Issue="ISSUE",e.PullRequest="PULL_REQUEST",e.PullRequestReview="PULL_REQUEST_REVIEW",e.Repository="REPOSITORY"}(sn||(sn={})),function(e){e.CollaboratorsOnly="COLLABORATORS_ONLY",e.ContributorsOnly="CONTRIBUTORS_ONLY",e.ExistingUsers="EXISTING_USERS",e.NoLimit="NO_LIMIT"}(Nn||(Nn={})),function(e){e.OneDay="ONE_DAY",e.OneMonth="ONE_MONTH",e.OneWeek="ONE_WEEK",e.SixMonths="SIX_MONTHS",e.ThreeDays="THREE_DAYS"}(dn||(dn={})),function(e){e.Organization="ORGANIZATION",e.Repository="REPOSITORY",e.User="USER"}(Rn||(Rn={})),function(e){e.CreatedAt="CREATED_AT",e.InviteeLogin="INVITEE_LOGIN"}(In||(In={})),function(e){e.Billing="BILLING",e.Migrating="MIGRATING",e.Moving="MOVING",e.Rename="RENAME"}(On||(On={})),function(e){e.CreatedAt="CREATED_AT",e.Name="NAME",e.PushedAt="PUSHED_AT",e.Stargazers="STARGAZERS",e.UpdatedAt="UPDATED_AT"}(ln||(ln={})),function(e){e.Admin="ADMIN",e.Maintain="MAINTAIN",e.Read="READ",e.Triage="TRIAGE",e.Write="WRITE"}(Dn||(Dn={})),function(e){e.Private="PRIVATE",e.Public="PUBLIC"}(_n||(_n={})),function(e){e.Internal="INTERNAL",e.Private="PRIVATE",e.Public="PUBLIC"}(Cn||(Cn={})),function(e){e.Completed="COMPLETED",e.InProgress="IN_PROGRESS",e.Pending="PENDING",e.Queued="QUEUED",e.Waiting="WAITING"}(Sn||(Sn={})),function(e){e.Sha1="SHA1",e.Sha256="SHA256",e.Sha384="SHA384",e.Sha512="SHA512"}(fn||(fn={})),function(e){e.RsaSha1="RSA_SHA1",e.RsaSha256="RSA_SHA256",e.RsaSha384="RSA_SHA384",e.RsaSha512="RSA_SHA512"}(Ln||(Ln={})),function(e){e.UpdatedAt="UPDATED_AT"}(Pn||(Pn={})),function(e){e.Discussion="DISCUSSION",e.Issue="ISSUE",e.Repository="REPOSITORY",e.User="USER"}(Un||(Un={})),function(e){e.Composer="COMPOSER",e.Go="GO",e.Maven="MAVEN",e.Npm="NPM",e.Nuget="NUGET",e.Pip="PIP",e.Rubygems="RUBYGEMS"}(bn||(bn={})),function(e){e.Cve="CVE",e.Ghsa="GHSA"}(vn||(vn={})),function(e){e.PublishedAt="PUBLISHED_AT",e.UpdatedAt="UPDATED_AT"}(Mn||(Mn={})),function(e){e.Critical="CRITICAL",e.High="HIGH",e.Low="LOW",e.Moderate="MODERATE"}(mn||(mn={})),function(e){e.UpdatedAt="UPDATED_AT"}(pn||(pn={})),function(e){e.Login="LOGIN",e.Relevance="RELEVANCE"}(gn||(gn={})),function(e){e.Login="LOGIN"}(hn||(hn={})),function(e){e.CancelledSponsorship="CANCELLED_SPONSORSHIP",e.NewSponsorship="NEW_SPONSORSHIP",e.PendingChange="PENDING_CHANGE",e.Refund="REFUND",e.SponsorMatchDisabled="SPONSOR_MATCH_DISABLED",e.TierChange="TIER_CHANGE"}(Vn||(Vn={})),function(e){e.Timestamp="TIMESTAMP"}(jn||(jn={})),function(e){e.All="ALL",e.Day="DAY",e.Month="MONTH",e.Week="WEEK"}(Bn||(Bn={})),function(e){e.MonthlySponsorshipAmount="MONTHLY_SPONSORSHIP_AMOUNT",e.TotalSponsorsCount="TOTAL_SPONSORS_COUNT"}(Gn||(Gn={})),function(e){e.CreatedAt="CREATED_AT",e.MonthlyPriceInCents="MONTHLY_PRICE_IN_CENTS"}(xn||(xn={})),function(e){e.CreatedAt="CREATED_AT"}(Fn||(Fn={})),function(e){e.CreatedAt="CREATED_AT"}(yn||(yn={})),function(e){e.Private="PRIVATE",e.Public="PUBLIC"}(Hn||(Hn={})),function(e){e.StarredAt="STARRED_AT"}(wn||(wn={})),function(e){e.Error="ERROR",e.Expected="EXPECTED",e.Failure="FAILURE",e.Pending="PENDING",e.Success="SUCCESS"}(Wn||(Wn={})),function(e){e.Ignored="IGNORED",e.Subscribed="SUBSCRIBED",e.Unsubscribed="UNSUBSCRIBED"}(Yn||(Yn={})),function(e){e.Number="NUMBER"}(kn||(kn={})),function(e){e.CreatedAt="CREATED_AT"}(Qn||(Qn={})),function(e){e.CreatedAt="CREATED_AT",e.Login="LOGIN"}(Kn||(Kn={})),function(e){e.Maintainer="MAINTAINER",e.Member="MEMBER"}(qn||(qn={})),function(e){e.All="ALL",e.ChildTeam="CHILD_TEAM",e.Immediate="IMMEDIATE"}($n||($n={})),function(e){e.Name="NAME"}(zn||(zn={})),function(e){e.Secret="SECRET",e.Visible="VISIBLE"}(Jn||(Jn={})),function(e){e.CreatedAt="CREATED_AT",e.Name="NAME",e.Permission="PERMISSION",e.PushedAt="PUSHED_AT",e.Stargazers="STARGAZERS",e.UpdatedAt="UPDATED_AT"}(Xn||(Xn={})),function(e){e.LoadBalance="LOAD_BALANCE",e.RoundRobin="ROUND_ROBIN"}(Zn||(Zn={})),function(e){e.Admin="ADMIN",e.Member="MEMBER"}(et||(et={})),function(e){e.NotRelevant="NOT_RELEVANT",e.PersonalPreference="PERSONAL_PREFERENCE",e.TooGeneral="TOO_GENERAL",e.TooSpecific="TOO_SPECIFIC"}(nt||(nt={})),function(e){e.OneDay="ONE_DAY",e.OneMonth="ONE_MONTH",e.OneWeek="ONE_WEEK",e.Permanent="PERMANENT",e.ThreeDays="THREE_DAYS"}(tt||(tt={})),function(e){e.UpdatedAt="UPDATED_AT"}(Et||(Et={})),function(e){e.CreatedAt="CREATED_AT",e.Domain="DOMAIN"}(it||(it={}));var Rt="\n    fragment LabelItem on Label {\n  color\n  name\n}\n    ",It="\n    fragment PostItem on Discussion {\n  number\n  title\n  createdAt\n  labels(first: $labelsCount) {\n    nodes {\n      ...LabelItem\n    }\n  }\n}\n    ".concat(Rt),Ot="\n    fragment PostDetail on Discussion {\n  number\n  title\n  updatedAt\n  bodyHTML\n  url\n  upvoteCount\n  labels(first: $labelsCount) {\n    nodes {\n      ...LabelItem\n    }\n  }\n}\n    ".concat(Rt),lt="\n    query user($user: String!) {\n  data: user(login: $user) {\n    name\n    websiteUrl\n    url\n    description: bio\n  }\n}\n    ",Dt=function(e,n){return Object(ct.a)(["user",e],dt(lt,e),n)};Dt.fetcher=function(e){return dt(lt,e)};var _t="\n    query discussionCategories($owner: String!, $name: String!, $count: Int!) {\n  repository(owner: $owner, name: $name) {\n    discussionCategories(first: $count) {\n      nodes {\n        id\n        name\n      }\n    }\n  }\n}\n    ",Ct=function(e,n){return Object(ct.a)(["discussionCategories",e],dt(_t,e),n)};Ct.fetcher=function(e){return dt(_t,e)};var St="\n    query discussions($owner: String!, $name: String!, $after: String, $before: String, $categoryId: ID, $first: Int, $last: Int, $orderBy: DiscussionOrder, $labelsCount: Int!) {\n  repository(owner: $owner, name: $name) {\n    discussions(\n      after: $after\n      before: $before\n      categoryId: $categoryId\n      first: $first\n      last: $last\n      orderBy: $orderBy\n    ) {\n      pageInfo {\n        hasPreviousPage\n        startCursor\n        hasNextPage\n        endCursor\n      }\n      totalCount\n      nodes {\n        ...PostItem\n      }\n    }\n  }\n}\n    ".concat(It),ft=function(e,n){return Object(ct.a)(["discussions",e],dt(St,e),n)};ft.fetcher=function(e){return dt(St,e)};var Lt="\n    query discussion($owner: String!, $name: String!, $number: Int!, $labelsCount: Int!) {\n  repository(owner: $owner, name: $name) {\n    discussion(number: $number) {\n      ...PostDetail\n    }\n  }\n}\n    ".concat(Ot),Pt=function(e,n){return Object(ct.a)(["discussion",e],dt(Lt,e),n)};Pt.fetcher=function(e){return dt(Lt,e)};var Ut=36e5;var bt,vt,Mt="Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(",");function mt(e){var n=new Date(e),t=n.getDate(),E=n.getMonth(),i=n.getFullYear();return"".concat(Mt[E]," ").concat(t,", ").concat(i)}function pt(e){var n=e.time,t=e.labels;return Object(T.jsxs)(gt,{wrap:!0,children:[mt(n),[t.length>0&&Object(T.jsx)(ot.a,{margin:"0 4px",children:"|"}),t.map((function(e){return Object(T.jsx)(ht,{data:e})}))]]})}var gt=Object(rt.b)(ot.b)(bt||(bt=Object(a.a)(["\n  color: #999;\n"])));function ht(e){var n=e.data;return Object(T.jsxs)(Bt,{href:"https://github.com/".concat(at.user,"/").concat(at.repository,"/discussions?discussions_q=label%3A").concat(n.name),color:n.color,children:["#",n.name]})}function Vt(e){var n=e.time;return Object(T.jsx)(gt,{children:mt(n)})}var jt,Bt=rt.b.a(vt||(vt=Object(a.a)(["\n  margin: 0 4px;\n  padding: 1px 6px 2px 6px;\n  background-color: ",";\n  border-radius: 4px;\n  font-size: 13px;\n  color: #666;\n  &:hover {\n    text-decoration: none};\n  }\n"])),(function(e){var n=e.color;return"#".concat(n,"4D")}));function Gt(){var e,n,t,E=Object(A.g)().id,i=Pt({owner:at.user,name:at.repository,number:Number(E),labelsCount:at.labelsCount},{staleTime:Ut,cacheTime:Ut}),o=i.isLoading,r=i.data,a=i.isError;if(o)return Object(T.jsx)("div",{});if(a)return Object(T.jsx)(u,{});var c=null===r||void 0===r||null===(e=r.repository)||void 0===e?void 0:e.discussion,s=null!==(n=null===c||void 0===c||null===(t=c.labels)||void 0===t?void 0:t.nodes)&&void 0!==n?n:[];return Object(T.jsxs)(ot.b,{column:!0,children:[Object(T.jsx)(yt,{children:null===c||void 0===c?void 0:c.title}),Object(T.jsx)(ot.a,{margin:"8px 0 48px 0",children:Object(T.jsx)(pt,{time:c.updatedAt,labels:s})}),Object(T.jsx)("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:null===c||void 0===c?void 0:c.bodyHTML}})]})}var xt,Ft,yt=rt.b.div(jt||(jt=Object(a.a)(["\n  font-size: 24px;\n"]))),Ht=t(35),wt=t(43),Wt=t(63),Yt=36e5;function kt(e){var n,t,E=e.data;return Object(T.jsx)(Qt,{to:"/post/".concat(null===E||void 0===E?void 0:E.number),children:Object(T.jsxs)(ot.b,{column:!0,padding:"20px 10px",children:[Object(T.jsx)(Kt,{children:null===E||void 0===E?void 0:E.title}),Object(T.jsxs)(ot.b,{marginTop:"12px",justifyContent:"space-between",children:[Object(T.jsx)(ot.a,{children:null===E||void 0===E||null===(n=E.labels)||void 0===n||null===(t=n.nodes)||void 0===t?void 0:t.map((function(e){return Object(T.jsx)(ht,{data:e})}))}),Object(T.jsx)(Vt,{time:E.createdAt})]})]},E.number)})}var Qt=Object(rt.b)(c.b)(xt||(xt=Object(a.a)(['\n  width="100%";\n  &:hover {\n    background-color: #f5f5f5;\n    border-radius: 8px;\n    text-decoration: none;\n  }\n  color: inherit;\n']))),Kt=rt.b.div(Ft||(Ft=Object(a.a)(["\n  font-size: 17px;\n"])));function qt(){var e=Object(Wt.a)("posts",(function(e){return ft.fetcher({owner:at.user,name:at.repository,categoryId:at.postCategoryId,first:at.perpage,after:e.pageParam,orderBy:{field:"UPDATED_AT"===at.orderBy?M.UpdatedAt:M.CreatedAt,direction:de.Desc},labelsCount:at.labelsCount})()}),{staleTime:Yt,cacheTime:Yt,getNextPageParam:function(e){var n,t=null===(n=e.repository)||void 0===n?void 0:n.discussions.pageInfo;return(null===t||void 0===t?void 0:t.hasNextPage)&&(null===t||void 0===t?void 0:t.endCursor)}}),n=e.data,t=e.isLoading,i=e.hasNextPage,o=e.fetchNextPage,r=Object(E.useMemo)((function(){var e;return null!==(e=null===n||void 0===n?void 0:n.pages.map((function(e){var n;return null===(n=e.repository)||void 0===n?void 0:n.discussions.nodes})).reduce((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return[].concat(Object(Ht.a)(null!==e&&void 0!==e?e:[]),Object(Ht.a)(null!==n&&void 0!==n?n:[]))}),[]))&&void 0!==e?e:[]}),[null===n||void 0===n?void 0:n.pageParams]),a=Object(E.useRef)(null),c=Object(wt.a)(a);return Object(E.useEffect)((function(){t||i&&c&&o()}),[t,i,c,null===n||void 0===n?void 0:n.pageParams]),Object(T.jsxs)(ot.b,{column:!0,width:"100%",children:[r.map((function(e,n){return Object(T.jsx)(kt,{data:e},null===e||void 0===e?void 0:e.number)})),Object(T.jsx)("div",{ref:a})]})}function $t(){return Object(T.jsx)(qt,{})}var zt,Jt,Xt,Zt=t(62),eE=t(42),nE=864e5;function tE(){var e=Dt({user:at.user},{staleTime:nE,cacheTime:nE}),n=e.isLoading,t=e.data,E=null===t||void 0===t?void 0:t.data;return n||!E?Object(T.jsx)("div",{}):Object(T.jsxs)(ot.b,{column:!0,alignItems:"center",as:"header",children:[Object(T.jsxs)(iE,{to:"/",children:[E.name,"'s Blog"]}),Object(T.jsx)(oE,{children:E.description}),Object(T.jsxs)(ot.b,{marginTop:"8px",children:[Object(T.jsx)("a",{href:E.url,children:"GitHub"}),E.websiteUrl&&[Object(T.jsx)(ot.a,{width:"8px"}),Object(T.jsx)("a",{href:E.websiteUrl,children:"Home"})]]}),Object(T.jsx)(rE,{})]})}var EE,iE=Object(rt.b)(c.b)(zt||(zt=Object(a.a)(["\n  font-size: 18px;\n  font-weight: bold;\n"]))),oE=rt.b.div(Jt||(Jt=Object(a.a)(["\n  margin-top: 8px;\n"]))),rE=rt.b.div(Xt||(Xt=Object(a.a)(["\n  width: 50%;\n  height: 1px;\n  background-color: #eee;\n  margin: 32px 0;\n"])));function aE(){return Object(T.jsxs)(AE,{as:"footer",justifyContent:"center",alignItems:"flex-end",padding:"128px 0 24px 0",children:["Copyright \xa9 2021 ",at.user]})}var cE,AE=Object(rt.b)(ot.b)(EE||(EE=Object(a.a)(["\n  flex: 1;\n  color: #999;\n"]))),TE=new Zt.a;function uE(){return Object(T.jsxs)(eE.a,{client:TE,children:[Object(T.jsx)(sE,{}),Object(T.jsx)(ot.b,{justifyContent:"center",height:"100%",children:Object(T.jsx)(c.a,{children:Object(T.jsxs)(ot.b,{column:!0,width:"100%",marginTop:"32px",maxWidth:"700px",padding:"0 20px",children:[Object(T.jsx)(tE,{}),Object(T.jsxs)(A.c,{children:[Object(T.jsx)(A.a,{exact:!0,path:"/",children:Object(T.jsx)($t,{})}),Object(T.jsx)(A.a,{path:"/post/:id(\\d+)",children:Object(T.jsx)(Gt,{})}),Object(T.jsx)(A.a,{path:"*",children:Object(T.jsx)(u,{})})]}),Object(T.jsx)(aE,{})]})})})]})}var sE=Object(rt.a)(cE||(cE=Object(a.a)(["\nhtml, body {\n  background-color: #fff;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-font-smoothing: antialiased;\n  -webkit-text-size-adjust: 100%;\n  height: 100%;\n  overflow: hidden;\n}\nbody {\n  font-family: apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, PingFang SC, Microsoft YaHei, sans-serif;\n  font-size: 14px;\n  line-height: 1;\n  color: #333;\n  position: relative;\n  word-wrap: break-word;\n  overflow: auto;\n}\nbody,\nh1,\nh2,\nh3,\nh4,\nul,\nli,\np {\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n}\nbutton {\n  appearance: none;\n  cursor: pointer;\n  outline: none;\n  border: none;\n}\na {\n  color: inherit;\n  cursor: pointer;\n}\na:link {\n  text-decoration: none;\n}\na:hover {\n  text-decoration: underline;\n}\n#root {\n  height: 100%;\n}\n"]))),NE=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,64)).then((function(n){var t=n.getCLS,E=n.getFID,i=n.getFCP,o=n.getLCP,r=n.getTTFB;t(e),E(e),i(e),o(e),r(e)}))};function dE(){return(dE=Object(ut.a)(Tt.a.mark((function e(){var n,t,E=arguments;return Tt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=E.length>0&&void 0!==E[0]?E[0]:10,e.next=3,Ct.fetcher({owner:at.user,name:at.repository,count:n})();case 3:t=e.sent,console.log(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r.a.render(Object(T.jsx)(i.a.StrictMode,{children:Object(T.jsx)(uE,{})}),document.getElementById("root")),NE(),window.encode=function(e){return st(e,at.caesarOffset)},window.printDiscussionCategories=function(){return dE.apply(this,arguments)}}},[[59,1,2]]]);
//# sourceMappingURL=main.be72d18e.chunk.js.map