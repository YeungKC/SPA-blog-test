(this["webpackJsonpnew-blog"]=this["webpackJsonpnew-blog"]||[]).push([[0],{48:function(e,n,t){},58:function(e,n,t){"use strict";t.r(n);var E,i,o,r,a,c,s,A,T,u,N,d,R,I,l,O,D,_,C,S,f,L,b,P,U,M,v,m,p,g,h,V,j,B,x,G,F,y,H,w,W,Y,k,Q,K,q,$,z,J,X,Z,ee,ne,te,Ee,ie,oe,re,ae,ce,se,Ae,Te,ue,Ne,de,Re,Ie,le,Oe,De,_e,Ce,Se,fe,Le,be,Pe,Ue,Me,ve,me,pe,ge,he,Ve,je,Be,xe,Ge,Fe,ye,He,we,We,Ye,ke,Qe,Ke,qe,$e,ze,Je,Xe,Ze,en,nn,tn,En,on,rn,an,cn,sn,An,Tn,un,Nn,dn,Rn,In,ln,On,Dn,_n,Cn,Sn,fn,Ln,bn,Pn,Un,Mn,vn,mn,pn,gn,hn,Vn,jn,Bn,xn,Gn,Fn,yn,Hn,wn,Wn,Yn,kn,Qn,Kn,qn,$n,zn=t(0),Jn=t.n(zn),Xn=t(41),Zn=t.n(Xn),et=(t(48),t(8)),nt=t(14),tt=t(7),Et=t(6),it=t(2),ot=function(){var e=Object(tt.f)();return Object(it.jsxs)(Et.b,{justifyContent:"center",alignItems:"center",gap:"16px",children:["No found for ",Object(it.jsx)("code",{children:e.pathname})]})},rt=(t(55),t(9)),at={caesarOffset:4,encryptedToken:"kltcRpokQ[xi\\tSjj}6TEt8GtG~{{oG9hz7]UO~P",user:"YeungKC",repository:"YeungKC.github.io",perpage:10,orderBy:"CREATED_AT",postCategoryId:"DIC_kwDOF8LZSc4B-xAD",labelsCount:64,blogName:"YeungKC's Blog",description:"One day we will die, Life is a journey.",sourceUrl:"https://github.com/YeungKC/Blog"},ct=t(60),st=t(22),At=t.n(st),Tt=t(30),ut=function(e,n){return e.split("").map((function(e){return String.fromCharCode(e.charCodeAt(0)+n)})).join("")},Nt=ut(at.encryptedToken,-at.caesarOffset),dt=function(e,n){return Object(Tt.a)(At.a.mark((function t(){var E,i,o,r;return At.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.github.com/graphql",{method:"POST",headers:{Authorization:"bearer ".concat(Nt)},body:JSON.stringify({query:e,variables:n})});case 2:return E=t.sent,t.next=5,E.json();case 5:if(!(i=t.sent).errors){t.next=9;break}throw o=i.errors[0]||"Error..",r=o.message,new Error(r);case 9:return t.abrupt("return",i.data);case 10:case"end":return t.stop()}}),t)})))};!function(e){e.CreatedAt="CREATED_AT"}(E||(E={})),function(e){e.Failure="FAILURE",e.Notice="NOTICE",e.Warning="WARNING"}(i||(i={})),function(e){e.ActionRequired="ACTION_REQUIRED",e.Cancelled="CANCELLED",e.Failure="FAILURE",e.Neutral="NEUTRAL",e.Skipped="SKIPPED",e.Stale="STALE",e.StartupFailure="STARTUP_FAILURE",e.Success="SUCCESS",e.TimedOut="TIMED_OUT"}(o||(o={})),function(e){e.All="ALL",e.Latest="LATEST"}(r||(r={})),function(e){e.Completed="COMPLETED",e.InProgress="IN_PROGRESS",e.Pending="PENDING",e.Queued="QUEUED",e.Requested="REQUESTED",e.Waiting="WAITING"}(a||(a={})),function(e){e.All="ALL",e.Direct="DIRECT",e.Outside="OUTSIDE"}(c||(c={})),function(e){e.Collaborator="COLLABORATOR",e.Contributor="CONTRIBUTOR",e.FirstTimer="FIRST_TIMER",e.FirstTimeContributor="FIRST_TIME_CONTRIBUTOR",e.Mannequin="MANNEQUIN",e.Member="MEMBER",e.None="NONE",e.Owner="OWNER"}(s||(s={})),function(e){e.Archived="ARCHIVED",e.Denied="DENIED",e.InsufficientAccess="INSUFFICIENT_ACCESS",e.Locked="LOCKED",e.LoginRequired="LOGIN_REQUIRED",e.Maintenance="MAINTENANCE",e.VerifiedEmailRequired="VERIFIED_EMAIL_REQUIRED"}(A||(A={})),function(e){e.CommitCount="COMMIT_COUNT",e.OccurredAt="OCCURRED_AT"}(T||(T={})),function(e){e.FirstQuartile="FIRST_QUARTILE",e.FourthQuartile="FOURTH_QUARTILE",e.None="NONE",e.SecondQuartile="SECOND_QUARTILE",e.ThirdQuartile="THIRD_QUARTILE"}(u||(u={})),function(e){e.Admin="ADMIN",e.None="NONE",e.Read="READ",e.Write="WRITE"}(N||(N={})),function(e){e.CreatedAt="CREATED_AT"}(d||(d={})),function(e){e.RequiredReviewers="REQUIRED_REVIEWERS",e.WaitTimer="WAIT_TIMER"}(R||(R={})),function(e){e.Approved="APPROVED",e.Rejected="REJECTED"}(I||(I={})),function(e){e.Abandoned="ABANDONED",e.Active="ACTIVE",e.Destroyed="DESTROYED",e.Error="ERROR",e.Failure="FAILURE",e.Inactive="INACTIVE",e.InProgress="IN_PROGRESS",e.Pending="PENDING",e.Queued="QUEUED",e.Waiting="WAITING"}(l||(l={})),function(e){e.Error="ERROR",e.Failure="FAILURE",e.Inactive="INACTIVE",e.InProgress="IN_PROGRESS",e.Pending="PENDING",e.Queued="QUEUED",e.Success="SUCCESS",e.Waiting="WAITING"}(O||(O={})),function(e){e.Left="LEFT",e.Right="RIGHT"}(D||(D={})),function(e){e.CreatedAt="CREATED_AT",e.UpdatedAt="UPDATED_AT"}(_||(_={})),function(e){e.CreatedAt="CREATED_AT"}(C||(C={})),function(e){e.BillingManager="BILLING_MANAGER",e.Owner="OWNER"}(S||(S={})),function(e){e.Admin="ADMIN",e.None="NONE",e.NoPolicy="NO_POLICY",e.Read="READ",e.Write="WRITE"}(f||(f={})),function(e){e.Disabled="DISABLED",e.Enabled="ENABLED",e.NoPolicy="NO_POLICY"}(L||(L={})),function(e){e.Enabled="ENABLED",e.NoPolicy="NO_POLICY"}(b||(b={})),function(e){e.CreatedAt="CREATED_AT",e.Login="LOGIN"}(P||(P={})),function(e){e.All="ALL",e.Disabled="DISABLED",e.NoPolicy="NO_POLICY",e.Private="PRIVATE",e.Public="PUBLIC"}(U||(U={})),function(e){e.Disabled="DISABLED",e.Enabled="ENABLED"}(M||(M={})),function(e){e.CreatedAt="CREATED_AT",e.CustomerName="CUSTOMER_NAME",e.HostName="HOST_NAME"}(v||(v={})),function(e){e.Email="EMAIL"}(m||(m={})),function(e){e.Login="LOGIN",e.RemoteCreatedAt="REMOTE_CREATED_AT"}(p||(p={})),function(e){e.CreatedAt="CREATED_AT"}(g||(g={})),function(e){e.Failure="FAILURE",e.Pending="PENDING",e.Success="SUCCESS"}(h||(h={})),function(e){e.Member="MEMBER",e.Owner="OWNER"}(V||(V={})),function(e){e.Cloud="CLOUD",e.Server="SERVER"}(j||(j={})),function(e){e.Dismissed="DISMISSED",e.Unviewed="UNVIEWED",e.Viewed="VIEWED"}(B||(B={})),function(e){e.CommunityBridge="COMMUNITY_BRIDGE",e.Custom="CUSTOM",e.Github="GITHUB",e.Issuehunt="ISSUEHUNT",e.KoFi="KO_FI",e.Liberapay="LIBERAPAY",e.OpenCollective="OPEN_COLLECTIVE",e.Otechie="OTECHIE",e.Patreon="PATREON",e.Tidelift="TIDELIFT"}(x||(x={})),function(e){e.CreatedAt="CREATED_AT",e.PushedAt="PUSHED_AT",e.UpdatedAt="UPDATED_AT"}(G||(G={})),function(e){e.All="ALL",e.Public="PUBLIC",e.Secret="SECRET"}(F||(F={})),function(e){e.BadCert="BAD_CERT",e.BadEmail="BAD_EMAIL",e.ExpiredKey="EXPIRED_KEY",e.GpgverifyError="GPGVERIFY_ERROR",e.GpgverifyUnavailable="GPGVERIFY_UNAVAILABLE",e.Invalid="INVALID",e.MalformedSig="MALFORMED_SIG",e.NotSigningKey="NOT_SIGNING_KEY",e.NoUser="NO_USER",e.OcspError="OCSP_ERROR",e.OcspPending="OCSP_PENDING",e.OcspRevoked="OCSP_REVOKED",e.UnknownKey="UNKNOWN_KEY",e.UnknownSigType="UNKNOWN_SIG_TYPE",e.Unsigned="UNSIGNED",e.UnverifiedEmail="UNVERIFIED_EMAIL",e.Valid="VALID"}(y||(y={})),function(e){e.Configured="CONFIGURED",e.Enforced="ENFORCED",e.Unconfigured="UNCONFIGURED"}(H||(H={})),function(e){e.Disabled="DISABLED",e.Enabled="ENABLED"}(w||(w={})),function(e){e.AllowListValue="ALLOW_LIST_VALUE",e.CreatedAt="CREATED_AT"}(W||(W={})),function(e){e.Disabled="DISABLED",e.Enabled="ENABLED"}(Y||(Y={})),function(e){e.UpdatedAt="UPDATED_AT"}(k||(k={})),function(e){e.Comments="COMMENTS",e.CreatedAt="CREATED_AT",e.UpdatedAt="UPDATED_AT"}(Q||(Q={})),function(e){e.Closed="CLOSED",e.Open="OPEN"}(K||(K={})),function(e){e.AddedToProjectEvent="ADDED_TO_PROJECT_EVENT",e.AssignedEvent="ASSIGNED_EVENT",e.ClosedEvent="CLOSED_EVENT",e.CommentDeletedEvent="COMMENT_DELETED_EVENT",e.ConnectedEvent="CONNECTED_EVENT",e.ConvertedNoteToIssueEvent="CONVERTED_NOTE_TO_ISSUE_EVENT",e.CrossReferencedEvent="CROSS_REFERENCED_EVENT",e.DemilestonedEvent="DEMILESTONED_EVENT",e.DisconnectedEvent="DISCONNECTED_EVENT",e.IssueComment="ISSUE_COMMENT",e.LabeledEvent="LABELED_EVENT",e.LockedEvent="LOCKED_EVENT",e.MarkedAsDuplicateEvent="MARKED_AS_DUPLICATE_EVENT",e.MentionedEvent="MENTIONED_EVENT",e.MilestonedEvent="MILESTONED_EVENT",e.MovedColumnsInProjectEvent="MOVED_COLUMNS_IN_PROJECT_EVENT",e.PinnedEvent="PINNED_EVENT",e.ReferencedEvent="REFERENCED_EVENT",e.RemovedFromProjectEvent="REMOVED_FROM_PROJECT_EVENT",e.RenamedTitleEvent="RENAMED_TITLE_EVENT",e.ReopenedEvent="REOPENED_EVENT",e.SubscribedEvent="SUBSCRIBED_EVENT",e.TransferredEvent="TRANSFERRED_EVENT",e.UnassignedEvent="UNASSIGNED_EVENT",e.UnlabeledEvent="UNLABELED_EVENT",e.UnlockedEvent="UNLOCKED_EVENT",e.UnmarkedAsDuplicateEvent="UNMARKED_AS_DUPLICATE_EVENT",e.UnpinnedEvent="UNPINNED_EVENT",e.UnsubscribedEvent="UNSUBSCRIBED_EVENT",e.UserBlockedEvent="USER_BLOCKED_EVENT"}(q||(q={})),function(e){e.CreatedAt="CREATED_AT",e.Name="NAME"}($||($={})),function(e){e.Size="SIZE"}(z||(z={})),function(e){e.OffTopic="OFF_TOPIC",e.Resolved="RESOLVED",e.Spam="SPAM",e.TooHeated="TOO_HEATED"}(J||(J={})),function(e){e.Behind="BEHIND",e.Blocked="BLOCKED",e.Clean="CLEAN",e.Dirty="DIRTY",e.Draft="DRAFT",e.HasHooks="HAS_HOOKS",e.Unknown="UNKNOWN",e.Unstable="UNSTABLE"}(X||(X={})),function(e){e.Conflicting="CONFLICTING",e.Mergeable="MERGEABLE",e.Unknown="UNKNOWN"}(Z||(Z={})),function(e){e.CreatedAt="CREATED_AT",e.DueDate="DUE_DATE",e.Number="NUMBER",e.UpdatedAt="UPDATED_AT"}(ee||(ee={})),function(e){e.Closed="CLOSED",e.Open="OPEN"}(ne||(ne={})),function(e){e.Disabled="DISABLED",e.Enabled="ENABLED"}(te||(te={})),function(e){e.Active="ACTIVE",e.PendingDeletion="PENDING_DELETION",e.Suspended="SUSPENDED"}(Ee||(Ee={})),function(e){e.Access="ACCESS",e.Authentication="AUTHENTICATION",e.Create="CREATE",e.Modify="MODIFY",e.Remove="REMOVE",e.Restore="RESTORE",e.Transfer="TRANSFER"}(ie||(ie={})),function(e){e.Asc="ASC",e.Desc="DESC"}(oe||(oe={})),function(e){e.Admin="ADMIN",e.Read="READ"}(re||(re={})),function(e){e.Business="BUSINESS",e.BusinessPlus="BUSINESS_PLUS",e.Free="FREE",e.TieredPerSeat="TIERED_PER_SEAT",e.Unlimited="UNLIMITED"}(ae||(ae={})),function(e){e.SamlExternalIdentityMissing="SAML_EXTERNAL_IDENTITY_MISSING",e.SamlSsoEnforcementRequiresExternalIdentity="SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY",e.TwoFactorRequirementNonCompliance="TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE"}(ce||(ce={})),function(e){e.Admin="ADMIN",e.BillingManager="BILLING_MANAGER",e.DirectMember="DIRECT_MEMBER",e.OutsideCollaborator="OUTSIDE_COLLABORATOR",e.Unaffiliated="UNAFFILIATED"}(se||(se={})),function(e){e.SamlExternalIdentityMissing="SAML_EXTERNAL_IDENTITY_MISSING",e.SamlSsoEnforcementRequiresExternalIdentity="SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY",e.TwoFactorAccountRecovery="TWO_FACTOR_ACCOUNT_RECOVERY",e.TwoFactorRequirementNonCompliance="TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE",e.UserAccountDeleted="USER_ACCOUNT_DELETED"}(Ae||(Ae={})),function(e){e.BillingManager="BILLING_MANAGER",e.OutsideCollaborator="OUTSIDE_COLLABORATOR",e.Unaffiliated="UNAFFILIATED"}(Te||(Te={})),function(e){e.SamlExternalIdentityMissing="SAML_EXTERNAL_IDENTITY_MISSING",e.TwoFactorRequirementNonCompliance="TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE"}(ue||(ue={})),function(e){e.Admin="ADMIN",e.None="NONE",e.Read="READ",e.Write="WRITE"}(Ne||(Ne={})),function(e){e.Admin="ADMIN",e.Read="READ"}(de||(de={})),function(e){e.All="ALL",e.Internal="INTERNAL",e.None="NONE",e.Private="PRIVATE",e.PrivateInternal="PRIVATE_INTERNAL",e.Public="PUBLIC",e.PublicInternal="PUBLIC_INTERNAL",e.PublicPrivate="PUBLIC_PRIVATE"}(Re||(Re={})),function(e){e.Admin="ADMIN",e.BillingManager="BILLING_MANAGER",e.DirectMember="DIRECT_MEMBER",e.Reinstate="REINSTATE"}(Ie||(Ie={})),function(e){e.Email="EMAIL",e.User="USER"}(le||(le={})),function(e){e.Admin="ADMIN",e.Member="MEMBER"}(Oe||(Oe={})),function(e){e.All="ALL",e.Disabled="DISABLED",e.Internal="INTERNAL",e.Private="PRIVATE"}(De||(De={})),function(e){e.CreatedAt="CREATED_AT",e.Login="LOGIN"}(_e||(_e={})),function(e){e.CreatedAt="CREATED_AT"}(Ce||(Ce={})),function(e){e.CreatedAt="CREATED_AT"}(Se||(Se={})),function(e){e.Debian="DEBIAN",e.Docker="DOCKER",e.Maven="MAVEN",e.Npm="NPM",e.Nuget="NUGET",e.Pypi="PYPI",e.Rubygems="RUBYGEMS"}(fe||(fe={})),function(e){e.CreatedAt="CREATED_AT"}(Le||(Le={})),function(e){e.Gist="GIST",e.Issue="ISSUE",e.Organization="ORGANIZATION",e.Project="PROJECT",e.PullRequest="PULL_REQUEST",e.Repository="REPOSITORY",e.Team="TEAM",e.User="USER"}(be||(be={})),function(e){e.BlueMint="BLUE_MINT",e.BluePurple="BLUE_PURPLE",e.PinkBlue="PINK_BLUE",e.PurpleCoral="PURPLE_CORAL",e.RedOrange="RED_ORANGE"}(Pe||(Pe={})),function(e){e.ChevronUp="CHEVRON_UP",e.Dot="DOT",e.DotFill="DOT_FILL",e.HeartFill="HEART_FILL",e.Plus="PLUS",e.Zap="ZAP"}(Ue||(Ue={})),function(e){e.Archived="ARCHIVED",e.NotArchived="NOT_ARCHIVED"}(Me||(Me={})),function(e){e.ContentOnly="CONTENT_ONLY",e.NoteOnly="NOTE_ONLY",e.Redacted="REDACTED"}(ve||(ve={})),function(e){e.Done="DONE",e.InProgress="IN_PROGRESS",e.Todo="TODO"}(me||(me={})),function(e){e.CreatedAt="CREATED_AT",e.Name="NAME",e.UpdatedAt="UPDATED_AT"}(pe||(pe={})),function(e){e.Closed="CLOSED",e.Open="OPEN"}(ge||(ge={})),function(e){e.AutomatedKanbanV2="AUTOMATED_KANBAN_V2",e.AutomatedReviewsKanban="AUTOMATED_REVIEWS_KANBAN",e.BasicKanban="BASIC_KANBAN",e.BugTriage="BUG_TRIAGE"}(he||(he={})),function(e){e.Merge="MERGE",e.Rebase="REBASE",e.Squash="SQUASH"}(Ve||(Ve={})),function(e){e.CreatedAt="CREATED_AT",e.UpdatedAt="UPDATED_AT"}(je||(je={})),function(e){e.Pending="PENDING",e.Submitted="SUBMITTED"}(Be||(Be={})),function(e){e.Approved="APPROVED",e.ChangesRequested="CHANGES_REQUESTED",e.ReviewRequired="REVIEW_REQUIRED"}(xe||(xe={})),function(e){e.Approve="APPROVE",e.Comment="COMMENT",e.Dismiss="DISMISS",e.RequestChanges="REQUEST_CHANGES"}(Ge||(Ge={})),function(e){e.Approved="APPROVED",e.ChangesRequested="CHANGES_REQUESTED",e.Commented="COMMENTED",e.Dismissed="DISMISSED",e.Pending="PENDING"}(Fe||(Fe={})),function(e){e.Closed="CLOSED",e.Merged="MERGED",e.Open="OPEN"}(ye||(ye={})),function(e){e.AddedToProjectEvent="ADDED_TO_PROJECT_EVENT",e.AssignedEvent="ASSIGNED_EVENT",e.AutomaticBaseChangeFailedEvent="AUTOMATIC_BASE_CHANGE_FAILED_EVENT",e.AutomaticBaseChangeSucceededEvent="AUTOMATIC_BASE_CHANGE_SUCCEEDED_EVENT",e.AutoMergeDisabledEvent="AUTO_MERGE_DISABLED_EVENT",e.AutoMergeEnabledEvent="AUTO_MERGE_ENABLED_EVENT",e.AutoRebaseEnabledEvent="AUTO_REBASE_ENABLED_EVENT",e.AutoSquashEnabledEvent="AUTO_SQUASH_ENABLED_EVENT",e.BaseRefChangedEvent="BASE_REF_CHANGED_EVENT",e.BaseRefDeletedEvent="BASE_REF_DELETED_EVENT",e.BaseRefForcePushedEvent="BASE_REF_FORCE_PUSHED_EVENT",e.ClosedEvent="CLOSED_EVENT",e.CommentDeletedEvent="COMMENT_DELETED_EVENT",e.ConnectedEvent="CONNECTED_EVENT",e.ConvertedNoteToIssueEvent="CONVERTED_NOTE_TO_ISSUE_EVENT",e.ConvertToDraftEvent="CONVERT_TO_DRAFT_EVENT",e.CrossReferencedEvent="CROSS_REFERENCED_EVENT",e.DemilestonedEvent="DEMILESTONED_EVENT",e.DeployedEvent="DEPLOYED_EVENT",e.DeploymentEnvironmentChangedEvent="DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT",e.DisconnectedEvent="DISCONNECTED_EVENT",e.HeadRefDeletedEvent="HEAD_REF_DELETED_EVENT",e.HeadRefForcePushedEvent="HEAD_REF_FORCE_PUSHED_EVENT",e.HeadRefRestoredEvent="HEAD_REF_RESTORED_EVENT",e.IssueComment="ISSUE_COMMENT",e.LabeledEvent="LABELED_EVENT",e.LockedEvent="LOCKED_EVENT",e.MarkedAsDuplicateEvent="MARKED_AS_DUPLICATE_EVENT",e.MentionedEvent="MENTIONED_EVENT",e.MergedEvent="MERGED_EVENT",e.MilestonedEvent="MILESTONED_EVENT",e.MovedColumnsInProjectEvent="MOVED_COLUMNS_IN_PROJECT_EVENT",e.PinnedEvent="PINNED_EVENT",e.PullRequestCommit="PULL_REQUEST_COMMIT",e.PullRequestCommitCommentThread="PULL_REQUEST_COMMIT_COMMENT_THREAD",e.PullRequestReview="PULL_REQUEST_REVIEW",e.PullRequestReviewThread="PULL_REQUEST_REVIEW_THREAD",e.PullRequestRevisionMarker="PULL_REQUEST_REVISION_MARKER",e.ReadyForReviewEvent="READY_FOR_REVIEW_EVENT",e.ReferencedEvent="REFERENCED_EVENT",e.RemovedFromProjectEvent="REMOVED_FROM_PROJECT_EVENT",e.RenamedTitleEvent="RENAMED_TITLE_EVENT",e.ReopenedEvent="REOPENED_EVENT",e.ReviewDismissedEvent="REVIEW_DISMISSED_EVENT",e.ReviewRequestedEvent="REVIEW_REQUESTED_EVENT",e.ReviewRequestRemovedEvent="REVIEW_REQUEST_REMOVED_EVENT",e.SubscribedEvent="SUBSCRIBED_EVENT",e.TransferredEvent="TRANSFERRED_EVENT",e.UnassignedEvent="UNASSIGNED_EVENT",e.UnlabeledEvent="UNLABELED_EVENT",e.UnlockedEvent="UNLOCKED_EVENT",e.UnmarkedAsDuplicateEvent="UNMARKED_AS_DUPLICATE_EVENT",e.UnpinnedEvent="UNPINNED_EVENT",e.UnsubscribedEvent="UNSUBSCRIBED_EVENT",e.UserBlockedEvent="USER_BLOCKED_EVENT"}(He||(He={})),function(e){e.Closed="CLOSED",e.Open="OPEN"}(we||(we={})),function(e){e.Confused="CONFUSED",e.Eyes="EYES",e.Heart="HEART",e.Hooray="HOORAY",e.Laugh="LAUGH",e.Rocket="ROCKET",e.ThumbsDown="THUMBS_DOWN",e.ThumbsUp="THUMBS_UP"}(We||(We={})),function(e){e.CreatedAt="CREATED_AT"}(Ye||(Ye={})),function(e){e.Alphabetical="ALPHABETICAL",e.TagCommitDate="TAG_COMMIT_DATE"}(ke||(ke={})),function(e){e.CreatedAt="CREATED_AT",e.Name="NAME"}(Qe||(Qe={})),function(e){e.Internal="INTERNAL",e.Private="PRIVATE",e.Public="PUBLIC"}(Ke||(Ke={})),function(e){e.Internal="INTERNAL",e.Private="PRIVATE",e.Public="PUBLIC"}(qe||(qe={})),function(e){e.Internal="INTERNAL",e.Private="PRIVATE",e.Public="PUBLIC"}($e||($e={})),function(e){e.Merge="MERGE",e.Rebase="REBASE",e.Squash="SQUASH"}(ze||(ze={})),function(e){e.Internal="INTERNAL",e.Private="PRIVATE",e.Public="PUBLIC"}(Je||(Je={})),function(e){e.Internal="INTERNAL",e.Private="PRIVATE",e.Public="PUBLIC"}(Xe||(Xe={})),function(e){e.Internal="INTERNAL",e.Private="PRIVATE",e.Public="PUBLIC"}(Ze||(Ze={})),function(e){e.Abuse="ABUSE",e.Duplicate="DUPLICATE",e.OffTopic="OFF_TOPIC",e.Outdated="OUTDATED",e.Resolved="RESOLVED",e.Spam="SPAM"}(en||(en={})),function(e){e.Collaborator="COLLABORATOR",e.OrganizationMember="ORGANIZATION_MEMBER",e.Owner="OWNER"}(nn||(nn={})),function(e){e.Commit="COMMIT",e.Issue="ISSUE",e.PullRequest="PULL_REQUEST",e.PullRequestReview="PULL_REQUEST_REVIEW",e.Repository="REPOSITORY"}(tn||(tn={})),function(e){e.CollaboratorsOnly="COLLABORATORS_ONLY",e.ContributorsOnly="CONTRIBUTORS_ONLY",e.ExistingUsers="EXISTING_USERS",e.NoLimit="NO_LIMIT"}(En||(En={})),function(e){e.OneDay="ONE_DAY",e.OneMonth="ONE_MONTH",e.OneWeek="ONE_WEEK",e.SixMonths="SIX_MONTHS",e.ThreeDays="THREE_DAYS"}(on||(on={})),function(e){e.Organization="ORGANIZATION",e.Repository="REPOSITORY",e.User="USER"}(rn||(rn={})),function(e){e.CreatedAt="CREATED_AT",e.InviteeLogin="INVITEE_LOGIN"}(an||(an={})),function(e){e.Billing="BILLING",e.Migrating="MIGRATING",e.Moving="MOVING",e.Rename="RENAME"}(cn||(cn={})),function(e){e.CreatedAt="CREATED_AT",e.Name="NAME",e.PushedAt="PUSHED_AT",e.Stargazers="STARGAZERS",e.UpdatedAt="UPDATED_AT"}(sn||(sn={})),function(e){e.Admin="ADMIN",e.Maintain="MAINTAIN",e.Read="READ",e.Triage="TRIAGE",e.Write="WRITE"}(An||(An={})),function(e){e.Private="PRIVATE",e.Public="PUBLIC"}(Tn||(Tn={})),function(e){e.Internal="INTERNAL",e.Private="PRIVATE",e.Public="PUBLIC"}(un||(un={})),function(e){e.Completed="COMPLETED",e.InProgress="IN_PROGRESS",e.Pending="PENDING",e.Queued="QUEUED",e.Waiting="WAITING"}(Nn||(Nn={})),function(e){e.Sha1="SHA1",e.Sha256="SHA256",e.Sha384="SHA384",e.Sha512="SHA512"}(dn||(dn={})),function(e){e.RsaSha1="RSA_SHA1",e.RsaSha256="RSA_SHA256",e.RsaSha384="RSA_SHA384",e.RsaSha512="RSA_SHA512"}(Rn||(Rn={})),function(e){e.UpdatedAt="UPDATED_AT"}(In||(In={})),function(e){e.Discussion="DISCUSSION",e.Issue="ISSUE",e.Repository="REPOSITORY",e.User="USER"}(ln||(ln={})),function(e){e.Composer="COMPOSER",e.Go="GO",e.Maven="MAVEN",e.Npm="NPM",e.Nuget="NUGET",e.Pip="PIP",e.Rubygems="RUBYGEMS"}(On||(On={})),function(e){e.Cve="CVE",e.Ghsa="GHSA"}(Dn||(Dn={})),function(e){e.PublishedAt="PUBLISHED_AT",e.UpdatedAt="UPDATED_AT"}(_n||(_n={})),function(e){e.Critical="CRITICAL",e.High="HIGH",e.Low="LOW",e.Moderate="MODERATE"}(Cn||(Cn={})),function(e){e.UpdatedAt="UPDATED_AT"}(Sn||(Sn={})),function(e){e.Login="LOGIN",e.Relevance="RELEVANCE"}(fn||(fn={})),function(e){e.Login="LOGIN"}(Ln||(Ln={})),function(e){e.CancelledSponsorship="CANCELLED_SPONSORSHIP",e.NewSponsorship="NEW_SPONSORSHIP",e.PendingChange="PENDING_CHANGE",e.Refund="REFUND",e.SponsorMatchDisabled="SPONSOR_MATCH_DISABLED",e.TierChange="TIER_CHANGE"}(bn||(bn={})),function(e){e.Timestamp="TIMESTAMP"}(Pn||(Pn={})),function(e){e.All="ALL",e.Day="DAY",e.Month="MONTH",e.Week="WEEK"}(Un||(Un={})),function(e){e.MonthlySponsorshipAmount="MONTHLY_SPONSORSHIP_AMOUNT",e.TotalSponsorsCount="TOTAL_SPONSORS_COUNT"}(Mn||(Mn={})),function(e){e.CreatedAt="CREATED_AT",e.MonthlyPriceInCents="MONTHLY_PRICE_IN_CENTS"}(vn||(vn={})),function(e){e.CreatedAt="CREATED_AT"}(mn||(mn={})),function(e){e.CreatedAt="CREATED_AT"}(pn||(pn={})),function(e){e.Private="PRIVATE",e.Public="PUBLIC"}(gn||(gn={})),function(e){e.StarredAt="STARRED_AT"}(hn||(hn={})),function(e){e.Error="ERROR",e.Expected="EXPECTED",e.Failure="FAILURE",e.Pending="PENDING",e.Success="SUCCESS"}(Vn||(Vn={})),function(e){e.Ignored="IGNORED",e.Subscribed="SUBSCRIBED",e.Unsubscribed="UNSUBSCRIBED"}(jn||(jn={})),function(e){e.Number="NUMBER"}(Bn||(Bn={})),function(e){e.CreatedAt="CREATED_AT"}(xn||(xn={})),function(e){e.CreatedAt="CREATED_AT",e.Login="LOGIN"}(Gn||(Gn={})),function(e){e.Maintainer="MAINTAINER",e.Member="MEMBER"}(Fn||(Fn={})),function(e){e.All="ALL",e.ChildTeam="CHILD_TEAM",e.Immediate="IMMEDIATE"}(yn||(yn={})),function(e){e.Name="NAME"}(Hn||(Hn={})),function(e){e.Secret="SECRET",e.Visible="VISIBLE"}(wn||(wn={})),function(e){e.CreatedAt="CREATED_AT",e.Name="NAME",e.Permission="PERMISSION",e.PushedAt="PUSHED_AT",e.Stargazers="STARGAZERS",e.UpdatedAt="UPDATED_AT"}(Wn||(Wn={})),function(e){e.LoadBalance="LOAD_BALANCE",e.RoundRobin="ROUND_ROBIN"}(Yn||(Yn={})),function(e){e.Admin="ADMIN",e.Member="MEMBER"}(kn||(kn={})),function(e){e.NotRelevant="NOT_RELEVANT",e.PersonalPreference="PERSONAL_PREFERENCE",e.TooGeneral="TOO_GENERAL",e.TooSpecific="TOO_SPECIFIC"}(Qn||(Qn={})),function(e){e.OneDay="ONE_DAY",e.OneMonth="ONE_MONTH",e.OneWeek="ONE_WEEK",e.Permanent="PERMANENT",e.ThreeDays="THREE_DAYS"}(Kn||(Kn={})),function(e){e.UpdatedAt="UPDATED_AT"}(qn||(qn={})),function(e){e.CreatedAt="CREATED_AT",e.Domain="DOMAIN"}($n||($n={}));var Rt="\n    fragment LabelItem on Label {\n  color\n  name\n}\n    ",It="\n    fragment PostItem on Discussion {\n  number\n  title\n  createdAt\n  labels(first: $labelsCount) {\n    nodes {\n      ...LabelItem\n    }\n  }\n}\n    ".concat(Rt),lt="\n    fragment PostDetail on Discussion {\n  number\n  title\n  updatedAt\n  bodyHTML\n  url\n  upvoteCount\n  labels(first: $labelsCount) {\n    nodes {\n      ...LabelItem\n    }\n  }\n}\n    ".concat(Rt),Ot="\n    query discussionCategories($owner: String!, $name: String!, $count: Int!) {\n  repository(owner: $owner, name: $name) {\n    discussionCategories(first: $count) {\n      nodes {\n        id\n        name\n      }\n    }\n  }\n}\n    ",Dt=function(e,n){return Object(ct.a)(["discussionCategories",e],dt(Ot,e),n)};Dt.fetcher=function(e){return dt(Ot,e)};var _t="\n    query discussions($owner: String!, $name: String!, $after: String, $before: String, $categoryId: ID, $first: Int, $last: Int, $orderBy: DiscussionOrder, $labelsCount: Int!) {\n  repository(owner: $owner, name: $name) {\n    discussions(\n      after: $after\n      before: $before\n      categoryId: $categoryId\n      first: $first\n      last: $last\n      orderBy: $orderBy\n    ) {\n      pageInfo {\n        hasPreviousPage\n        startCursor\n        hasNextPage\n        endCursor\n      }\n      totalCount\n      nodes {\n        ...PostItem\n      }\n    }\n  }\n}\n    ".concat(It),Ct=function(e,n){return Object(ct.a)(["discussions",e],dt(_t,e),n)};Ct.fetcher=function(e){return dt(_t,e)};var St="\n    query discussion($owner: String!, $name: String!, $number: Int!, $labelsCount: Int!) {\n  repository(owner: $owner, name: $name) {\n    discussion(number: $number) {\n      ...PostDetail\n    }\n  }\n}\n    ".concat(lt),ft=function(e,n){return Object(ct.a)(["discussion",e],dt(St,e),n)};ft.fetcher=function(e){return dt(St,e)};var Lt,bt,Pt,Ut=36e5;var Mt,vt,mt,pt=Object(rt.c)(Lt||(Lt=Object(et.a)(["\n   0% { transform: rotate(0deg); }\n   100% { transform: rotate(360deg); }\n"]))),gt=rt.b.div(bt||(bt=Object(et.a)(["\n  border: 2px solid #eee;\n  border-top: 2px solid #333;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  animation: "," 1s linear infinite;\n"])),pt),ht=function(){return Object(it.jsxs)(Vt,{justifyContent:"center",alignItems:"center",gap:"16px",children:[Object(it.jsx)(gt,{}),"Loading..."]})},Vt=Object(rt.b)(Et.b)(Pt||(Pt=Object(et.a)(["\nmargin: 56px 0;\nfont-size: 16px;\n"]))),jt="Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(",");function Bt(e){var n=new Date(e),t=n.getDate(),E=n.getMonth(),i=n.getFullYear();return"".concat(jt[E]," ").concat(t,", ").concat(i)}var xt=function(e){var n=e.time,t=e.labels;return Object(it.jsxs)(Gt,{wrap:!0,gap:"4px 8px",alignItems:"stretch",children:[Bt(n),t.length&&Object(it.jsx)(Ft,{}),[t.map((function(e){return Object(it.jsx)(yt,{data:e})}))]]})},Gt=Object(rt.b)(Et.b)(Mt||(Mt=Object(et.a)(["\n  color: #999;\n"]))),Ft=rt.b.div(vt||(vt=Object(et.a)(["\n  margin: 2px 0;\n  width: 1px;\n  background-color: #999;\n"])));function yt(e){var n=e.data;return Object(it.jsxs)(Qt,{href:"https://github.com/".concat(at.user,"/").concat(at.repository,"/discussions?discussions_q=label%3A").concat(n.name),color:n.color,children:["#",n.name]})}function Ht(e){var n=e.time;return Object(it.jsx)(Gt,{children:Bt(n)})}var wt,Wt,Yt,kt,Qt=rt.b.a(mt||(mt=Object(et.a)(["\n  padding: 1px 6px 2px 6px;\n  background-color: ",";\n  border-radius: 4px;\n  font-size: 13px;\n  color: #666;\n  &:hover {\n    text-decoration: none};\n  }\n"])),(function(e){var n=e.color;return"#".concat(n,"4D")})),Kt=function(){var e,n,t,E=Object(tt.g)().id,i=ft({owner:at.user,name:at.repository,number:Number(E),labelsCount:at.labelsCount},{staleTime:Ut,cacheTime:Ut}),o=i.isLoading,r=i.data,a=i.isError;if(o)return Object(it.jsx)(ht,{});if(a)return Object(it.jsx)(ot,{});var c=null===r||void 0===r||null===(e=r.repository)||void 0===e?void 0:e.discussion,s=null!==(n=null===c||void 0===c||null===(t=c.labels)||void 0===t?void 0:t.nodes)&&void 0!==n?n:[];return Object(it.jsxs)(Et.b,{column:!0,children:[Object(it.jsx)(qt,{children:null===c||void 0===c?void 0:c.title}),Object(it.jsx)(Et.a,{margin:"8px 0 48px 0",children:Object(it.jsx)(xt,{time:c.updatedAt,labels:s})}),Object(it.jsx)("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:null===c||void 0===c?void 0:c.bodyHTML}})]})},qt=rt.b.div(wt||(wt=Object(et.a)(["\n  font-size: 24px;\n"]))),$t=t(61),zt=t(42),Jt=function(){var e;return Object(it.jsxs)(Et.b,{column:!0,alignItems:"center",as:"header",children:[Object(it.jsx)(Xt,{to:"/",children:at.blogName}),Object(it.jsx)(Zt,{children:null!==(e=at.description)&&void 0!==e?e:""}),",",Object(it.jsx)(Et.b,{marginTop:"8px",gap:"8px",children:Object(it.jsx)("a",{href:at.sourceUrl,children:"Github"})}),Object(it.jsx)(eE,{})]})},Xt=Object(rt.b)(nt.b)(Wt||(Wt=Object(et.a)(["\n  font-size: 18px;\n  font-weight: bold;\n"]))),Zt=rt.b.div(Yt||(Yt=Object(et.a)(["\n  margin-top: 8px;\n"]))),eE=rt.b.div(kt||(kt=Object(et.a)(["\n  width: 50%;\n  height: 1px;\n  background-color: #eee;\n  margin: 32px 0;\n"]))),nE=t(38),tE=t(62),EE=36e5;var iE,oE,rE=t(43);function aE(e){var n=e.children,t=e.disabled,E=e.onIntersect,i=Object(zn.useRef)(null),o=Object(rE.a)(i,{initialIsIntersecting:!0});return Object(zn.useEffect)((function(){t||o&&E()}),[t,o,E]),Object(it.jsxs)(Et.b,{column:!0,children:[n,Object(it.jsx)("div",{ref:i})]})}var cE,sE,AE=function(e){var n,t,E=e.data;return Object(it.jsx)(TE,{children:Object(it.jsx)(nt.b,{to:"/post/".concat(null===E||void 0===E?void 0:E.number),children:Object(it.jsxs)(Et.b,{column:!0,padding:"20px 10px",children:[Object(it.jsx)(uE,{children:null===E||void 0===E?void 0:E.title}),Object(it.jsxs)(Et.b,{marginTop:"12px",justifyContent:"space-between",children:[Object(it.jsx)(Et.b,{gap:"4px 8px",children:null===E||void 0===E||null===(n=E.labels)||void 0===n||null===(t=n.nodes)||void 0===t?void 0:t.map((function(e){return Object(it.jsx)(yt,{data:e})}))}),Object(it.jsx)(Ht,{time:E.createdAt})]})]},E.number)})})},TE=rt.b.div(iE||(iE=Object(et.a)(["\n  &:hover {\n    background-color: #f5f5f5;\n    border-radius: 8px;\n    text-decoration: none;\n  }\n  a:hover {\n    text-decoration: none;\n  }\n"]))),uE=rt.b.div(oE||(oE=Object(et.a)(["\n  font-size: 17px;\n"]))),NE=function(){var e=Object(tE.a)("posts",(function(e){return Ct.fetcher({owner:at.user,name:at.repository,categoryId:at.postCategoryId,first:at.perpage,after:e.pageParam,orderBy:{field:"UPDATED_AT"===at.orderBy?_.UpdatedAt:_.CreatedAt,direction:oe.Desc},labelsCount:at.labelsCount})()}),{staleTime:EE,cacheTime:EE,getNextPageParam:function(e){var n,t=null===(n=e.repository)||void 0===n?void 0:n.discussions.pageInfo;return(null===t||void 0===t?void 0:t.hasNextPage)&&(null===t||void 0===t?void 0:t.endCursor)}}),n=e.data,t=e.isLoading,E=e.isFetchingNextPage,i=e.hasNextPage,o=e.fetchNextPage,r=Object(zn.useMemo)((function(){var e;return null!==(e=null===n||void 0===n?void 0:n.pages.map((function(e){var n;return null===(n=e.repository)||void 0===n?void 0:n.discussions.nodes})).reduce((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return[].concat(Object(nE.a)(null!==e&&void 0!==e?e:[]),Object(nE.a)(null!==n&&void 0!==n?n:[]))}),[]))&&void 0!==e?e:[]}),[null===n||void 0===n?void 0:n.pageParams]);return Object(it.jsxs)(aE,{disabled:t||E||!i,onIntersect:o,children:[r.map((function(e){return Object(it.jsx)(AE,{data:e},null===e||void 0===e?void 0:e.number)})),(t||E)&&Object(it.jsx)(ht,{})]})},dE=new $t.a;function RE(){return Object(it.jsxs)(zt.a,{client:dE,children:[Object(it.jsx)(lE,{}),Object(it.jsx)(Et.b,{justifyContent:"center",height:"100%",children:Object(it.jsx)(nt.a,{children:Object(it.jsxs)(Et.b,{column:!0,width:"100%",marginTop:"32px",maxWidth:"800px",padding:"0 20px",sizing:"border-box",children:[Object(it.jsx)(Jt,{}),Object(it.jsxs)(tt.c,{children:[Object(it.jsx)(tt.a,{exact:!0,path:"/",children:Object(it.jsx)(NE,{})}),Object(it.jsx)(tt.a,{path:"/post/:id(\\d+)",children:Object(it.jsx)(Kt,{})}),Object(it.jsx)(tt.a,{path:"*",children:Object(it.jsx)(ot,{})})]}),Object(it.jsx)(IE,{})]})})})]})}var IE=Object(rt.b)(Et.b)(cE||(cE=Object(et.a)(["\n  flex: 1;\n  color: #999;\n  justify-content: center;\n  align-items: flex-end;\n  min-height: 128px;\n"]))),lE=Object(rt.a)(sE||(sE=Object(et.a)(["\nhtml, body {\n  background-color: #fff;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-font-smoothing: antialiased;\n  -webkit-text-size-adjust: 100%;\n  height: 100%;\n  overflow: hidden;\n}\nbody {\n  font-family: apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, PingFang SC, Microsoft YaHei, sans-serif;\n  font-size: 14px;\n  line-height: 1;\n  color: #333;\n  position: relative;\n  word-wrap: break-word;\n  overflow: auto;\n}\nbody,\nh1,\nh2,\nh3,\nh4,\nul,\nli,\np {\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n}\nbutton {\n  appearance: none;\n  cursor: pointer;\n  outline: none;\n  border: none;\n}\na {\n  color: inherit;\n  cursor: pointer;\n}\na:link {\n  text-decoration: none;\n}\na:hover {\n  text-decoration: underline;\n}\n#root {\n  height: 100%;\n}\n"]))),OE=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,63)).then((function(n){var t=n.getCLS,E=n.getFID,i=n.getFCP,o=n.getLCP,r=n.getTTFB;t(e),E(e),i(e),o(e),r(e)}))};function DE(){return(DE=Object(Tt.a)(At.a.mark((function e(){var n,t,E=arguments;return At.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=E.length>0&&void 0!==E[0]?E[0]:10,e.next=3,Dt.fetcher({owner:at.user,name:at.repository,count:n})();case 3:t=e.sent,console.log(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Zn.a.render(Object(it.jsx)(Jn.a.StrictMode,{children:Object(it.jsx)(RE,{})}),document.getElementById("root")),OE(),window.encode=function(e){return ut(e,at.caesarOffset)},window.printDiscussionCategories=function(){return DE.apply(this,arguments)}}},[[58,1,2]]]);
//# sourceMappingURL=main.64e4838a.chunk.js.map